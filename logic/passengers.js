function Passengers() {

    function checkFlightCapacity(flightCapacity, passengers){

        var sum = 0;

        for(var i = 0; i < passengers.length; i++){

            sum += passengers[i];
        }

        if(flightCapacity < passengers){
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
        }
        return sum;
    }

    return {checkFlightCapacity};
}

module.exports = Passengers();