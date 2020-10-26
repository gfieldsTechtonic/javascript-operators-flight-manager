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

        if(vip < businessSeats){

            vipBusinessTemp += vip;
            businessSeats -= vip;
            vip = 0;
        }
        else{

            vipBusinessTemp = businessSeats;
            vip -= businessSeats;
            businessSeats = 0;

            if(vip < econSeats){
                
                vipEconTemp += vip;
                econSeats -= vip;
                vip = 0;
            }
            else{

                vipEconTemp = econSeats;
                vip -= econSeats;
                econSeats = 0;
            }
        }

        if(reg < businessSeats){

            regBusinessTemp += reg;
            businessSeats -= reg;
            vip = 0;
        }
        else{

            regBusinessTemp = businessSeats;
            reg -= businessSeats;
            businessSeats = 0;

            if(reg < econSeats){
                
                regEconTemp += reg;
                econSeats -= reg;
                vip = 0;
            }
            else{

                regEconTemp = econSeats;
                reg -= econSeats;
                econSeats = 0;
            }
        }

        var seatList = {

            vipBusiness: vipBusinessTemp,
            vipEcon: vipEconTemp,
            regBusiness: regBusinessTemp,
            regEcon: regEconTemp
        };

        return seatList;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();