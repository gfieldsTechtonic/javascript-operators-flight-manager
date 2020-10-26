function Passengers() {

    function checkFlightCapacity(flightCapacity, passengers){

        var sum = 0;

        for(var i = 0; i < passengers.length; i++){

            sum += passengers[i];
        }

        if(flightCapacity < passengers){
            throw new Error("");
        }

        return sum;
    }

    return {checkFlightCapacity};
}

module.exports = Passengers();