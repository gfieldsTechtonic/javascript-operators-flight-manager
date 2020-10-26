function Flights() {

    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){

        try{

            if(numberOfPassengers < 0){
                throw "The number of passengers must be a positive integer value";
            }
            else if(flightCapacity < 0){
                throw "The capacity of the flight must be a positive integer value";
            }
            else{
                return Math.ceil(numberOfPassengers / flightCapacity);
            }
        }
        catch(error){

            console.log(error);
        }
        finally{

            console.log(numberOfPassengers);
            console.log(flightCapacity);
        }

        
    }

    return{calculateNumberOfFlights};
}

module.exports = Flights();