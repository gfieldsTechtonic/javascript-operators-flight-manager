function Flights() {

    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){

        var errorMsg;

        try{

            if(numberOfPassengers < 0){
                errorMsg = "The number of passengers must be a positive integer value";
                throw error;
            }
            else if(flightCapacity < 0){
                errorMsg = "The capacity of the flight must be a positive integer value";
                throw error;
            }
            else{
                return Math.ceil(numberOfPassengers / flightCapacity);
            }
        }
        catch(error){

            console.log(errorMsg);
        }
        finally{

            console.log(numberOfPassengers);
            console.log(flightCapacity);
        }

        
    }

    return{calculateNumberOfFlights};
}

module.exports = Flights();