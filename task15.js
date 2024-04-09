var guestList = ["Khala", "Khalo", "Nani"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to Sehri. \n Wajeeha \n"));
}
var guestCancel = guestList[1];
guestList[1] = "Nana";
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner,\n Wajeeha \n"));
}
console.log("Unfortunately, ".concat(guestCancel, " can't make it to the dinner."));
