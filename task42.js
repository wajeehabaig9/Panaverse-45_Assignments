function show_magicianss(magiciansss) {
    for (var _i = 0, magiciansss_1 = magiciansss; _i < magiciansss_1.length; _i++) {
        var magician = magiciansss_1[_i];
        console.log(magician);
    }
}
function make_great(magiciansss) {
    for (var i = 0; i < magiciansss.length; i++) {
        magiciansss[i] = "the Great ".concat(magiciansss[i]);
    }
    return magiciansss;
}
var magiciansss = ["Kamran", "Sanaullah", "Fahad", "Sobia", "Zara"];
magiciansss = make_great(magiciansss);
show_magicianss(magiciansss);
