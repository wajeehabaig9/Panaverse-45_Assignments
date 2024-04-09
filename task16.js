var GuestLists = ["Chacha", "Chachi", "Dadi"];
console.log("We found a bigger dinner table.");
GuestLists.unshift("Dada");
var middleIndex = Math.floor(GuestLists.length / 2);
GuestLists.splice(middleIndex, 0, "Eve");
GuestLists.push("Khala");
GuestLists.forEach(function (guest) {
    console.log("Assalam Alikum ".concat(GuestLists, ", you are cordially invited to dinner at our place."));
});
