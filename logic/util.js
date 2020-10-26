function Util() {

    function calculateTotalDistributedPassengers(seatList){

        var sum = 0;

        for(var x in seatList){

            sum += seatList[x];
        }

        return sum;
    }

    function calculateTotalNumberOfPassengers(passengers){

        var sum = 0;

        for(var i = 0; i < passengers.length; i++){

            sum += passengers[i]; 
        }

        return sum;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();