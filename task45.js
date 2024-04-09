function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, extras: {} };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            car.extras[key] = extra[key];
        }
    }
    return car;
}
var car = car_info("Toyota", "Camry", { color: "Blue" }, { year: "2022" });
console.log(car);
