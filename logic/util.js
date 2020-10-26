function Util() {

    function calculateTotalDistributedPassengers(seatList){

        var sum = 0;

        for(var x in seatList){

            sum += seatList[x];
        }

        return sum;
    }

    return {calculateTotalDistributedPassengers};
}

module.exports = Util();