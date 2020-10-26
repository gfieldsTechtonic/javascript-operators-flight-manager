function Prices() {
   
    function calculateFinalPrice(base, varPassenger, varFlight){

        var price = base;

        price *= (1 + varPassenger/100);
        price *= (1 + varFlight/100);

        price = Math.round(price * 100) / 100;

        return price;
    }

    function calculateDefaultFinalPrice(base, passType, flightType){

        var regularWeight = 1 + -.05;
        var vipWeight = 1 + .05;
        var econWeight = 1 + -.03;
        var businessWeight = 1 + .1;
        var price = base;

        passType = passType.toLowerCase();
        flightType = flightType.toLowerCase();

        if(passType == "regular"){

            price *= regularWeight;
        }
        else if(passType == "vip"){

            price *= vipWeight;
        }

        if(flightType == "economy"){

            price *= econWeight;
        }
        else if(flightType == "business"){

            price *= businessWeight;
        }

        price = Math.round(price * 100) / 100;

        console.log(base);
        console.log(passType);
        console.log(flightType);
        console.log(price);

        return price;
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice};
}

module.exports = Prices();