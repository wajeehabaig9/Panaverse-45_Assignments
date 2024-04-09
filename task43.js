function show_magiciansss(magicNames) {
    for (var _i = 0, magicNames_1 = magicNames; _i < magicNames_1.length; _i++) {
        var magician = magicNames_1[_i];
        console.log(magician);
    }
}
function make_greats(magicNames) {
    var great_magicNames = [];
    for (var _i = 0, magicNames_2 = magicNames; _i < magicNames_2.length; _i++) {
        var magician = magicNames_2[_i];
        great_magicNames.push("the Great ".concat(magician));
    }
    return great_magicNames;
}
var magicNames = ["Ali", "Fatima", "Saeed", "Zara", "Imran"];
var great_magicNames = make_greats(magicNames.slice());
show_magiciansss(magicNames);
console.log("--------------------------");
show_magiciansss(great_magicNames);
