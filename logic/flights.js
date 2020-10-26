function Flights() {

    function calculateNumberOfFLights(numberOfPassengers, flightCapacity){
        return Math.ceil(numberOfPassengers / flightCapacity);
    }

    return{calculateNumberOfFLights};
}

module.exports = Flights();