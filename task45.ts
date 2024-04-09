function car_info(manufacturer: string, model: string, ...extras: { [key: string]: string }[]): { manufacturer: string, model: string, extras: { [key: string]: string } } {
    let car: { manufacturer: string, model: string, extras: { [key: string]: string } } = { manufacturer, model, extras: {} };

    for (let extra of extras) {
        for (let key in extra) {
            car.extras[key] = extra[key];
        }
    }

    return car;
}

let car = car_info("Toyota", "Camry", { color: "Blue" }, { year: "2022" });

console.log(car);
