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

    return{calculateNumberOfFlights};
}

module.exports = Flights();