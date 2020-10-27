function Prices() {
   
    function calculateFinalPrice(base, varPassenger, varFlight){

        var price = base;

        price *= (1 + varPassenger/100);
        price *= (1 + varFlight/100);

        price = Math.round(price * 100) / 100;

        return price;
    }

    function calculateDefaultFinalPrice(base, passType, flightType){

        var passTypeWeight = 0;
        var flightTypeWeight = 0;

        passType = passType.toLowerCase();
        flightType = flightType.toLowerCase();

        if(passType == "regular"){

            passTypeWeight = -5;
        }
        else if(passType == "vip"){

            passTypeWeight = 5;;
        }

        if(flightType == "economy"){

            flightTypeWeight = -3;
        }
        else if(flightType == "business"){

            flightTypeWeight = 10;
        }

        return calculateFinalPrice(base, passTypeWeight, flightTypeWeight);
    }

    function calculateTotalFinalPrice(seats, passType, flightType, base){

        return seats * calculateDefaultFinalPrice(base, passType, flightType)
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();