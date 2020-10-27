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

    function checkInput(input){

        if(typeof input != "Number"){

            throw new Exception("");
        }
    }

    function calculateTotalDistance(distances){

        var sum = 0;

        for(var i = 0; i < distances.length; i++){

            if(distances[i] > 0)
                sum += distances[i];
        }

        return sum;
    }

    function calculateBonusPoints(businessDistances, econDistances, businessWeight, econWeight){

        return calculateTotalDistance(businessDistances) * (businessWeight/100) + calculateTotalDistance(econDistances) * (econWeight/100);
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();