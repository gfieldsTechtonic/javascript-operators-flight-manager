function Flights() {

    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){

        if(numberOfPassengers < 0){
            throw new Error("The number of passengers must be a positive integer value");
        }   
        else if(flightCapacity < 0){
            throw new Error("The capacity of the flight must be a positive integer value");
        }
        else{
            return Math.ceil(numberOfPassengers / flightCapacity);
        }
    }

    return{calculateNumberOfFlights};
}

module.exports = Flights();