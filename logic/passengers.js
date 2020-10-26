function Passengers() {

    function checkFlightCapacity(flightCapacity, passengers){

        var sum = 0;

        for(var i = 0; i < passengers.length; i++){

            sum += passengers[i];
        }

        if(flightCapacity < sum){
            throw new Error("");
        }

        return sum;
    }

    function distributeAllSeatsToAllPassengers(vip, reg, numOfFlights, businessSeats, econSeats){
        
        businessSeats *= numOfFlights;
        econSeats *= numOfFlights;

        vipBusinessTemp = 0;
        vipEconTemp = 0;
        regBusinessTemp = 0;
        regEconTemp = 0;

        var leftOverSeats = distributeSeats(businessSeats, vip);

        if(leftOverSeats <= 0){

            vipBusinessTemp = (businessSeats);
            vip -= vipBusinessTemp;
            businessSeats = 0;
        }
        else{

            vipBusinessTemp = (businessSeats - leftOverSeats);
            vip -= vipBusinessTemp;
            businessSeats = leftOverSeats;
        }

        leftOverSeats = distributeSeats(econSeats, vip);

        if(leftOverSeats <= 0){

            vipEconTemp = (econSeats);
            vip -= vipEconTemp;
            econSeats = 0;
        }
        else{

            vipEconTemp = (econSeats - leftOverSeats);
            vip -= vipEconTemp;
            econSeats = leftOverSeats;
        }

        leftOverSeats = distributeSeats(businessSeats, reg);

        if(leftOverSeats <= 0){

            regBusinessTemp = (businessSeats);
            reg -= regBusinessTemp;
            businessSeats = 0;
        }
        else{

            regBusinessTemp = (businessSeats - leftOverSeats);
            reg -= regBusinessTemp;
            businessSeats = leftOverSeats;
        }

        leftOverSeats = distributeSeats(econSeats, reg);

        if(leftOverSeats <= 0){

            regEconTemp = (regSeats);
            reg -= regEconTemp;
            econSeats = 0;
        }
        else{

            regEconTemp = (econSeats - leftOverSeats);
            reg -= regEconTemp;
            econSeats = leftOverSeats;
        }

        var seatList = {

            vipPassengersWithBusinessSeats: vipBusinessTemp,
            vipPassengersWithEconomySeats: vipEconTemp,
            regularPassengersWithBusinessSeats: regBusinessTemp,
            regularPassengersWithEconomySeats: regEconTemp
        };

        return seatList;
    }

    function distributeSeats(seats, passengers){

        return seats - passengers;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();