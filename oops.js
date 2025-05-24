//CLASS AND OBJECT
var BikeFactory = /** @class */ (function () {
    function BikeFactory(brand, type, price) {
        this.brand = brand;
        this.type = type;
        this.price = price;
        this.gear = 6;
    }
    return BikeFactory;
}());
var b1 = new BikeFactory("GT650", "cafe-racer", 4.5);
