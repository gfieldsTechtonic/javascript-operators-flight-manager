function Flights() {

    function calculateNumberOfFlights(passengers, flightCapacity){

        if(passengers < 0 || (!Number.isInteger(Number(passengers)))){
            throw new Error("The number of passengers must be a positive integer value");
        }   
        else if(flightCapacity < 0  || (!Number.isInteger(Number(flightCapacity)))){
            throw new Error("The capacity of the flight must be a positive integer value");
        }
        else{
            return Math.ceil(passengers / flightCapacity);
        }
    }

    function checkAircraftRevision(distanceLimit, distances){

        var outMsg = "";

        var sum = 0;

        for(var i = 0; i < distances.length; i++){

            sum += distances[i];
        }

        sum /= distanceLimit;

        if(sum > 1){

            throw new Error("");
        }
        else if(sum >= .75){

            outMsg = "The revision needs to be done within the next month";
        }
        else if(sum >= .5){

            outMsg = "The revision needs to be done within the next 2 months";
        }
        else{

            outMsg = "The revision needs to be done within the next 3 months";
        }

        return outMsg;
    }

    return{calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();