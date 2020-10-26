function Prices() {
    function calculateFinalPrice(base, varPassenger, varFlight){

        var price = base;

        price = price + (varPassenger/100 * price);
        price = price + (varFlight/100 * price);

        price = Math.round(price * 100) / 100;

        return price;
    }

    return {calculateFinalPrice};
}

module.exports = Prices();