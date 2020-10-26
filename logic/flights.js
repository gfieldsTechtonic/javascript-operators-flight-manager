function Flights() {

    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){
        return Math.ceil(numberOfPassengers / flightCapacity);
    }

    return{calculateNumberOfFlights};
}

module.exports = Flights();