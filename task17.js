var guests = ["Alice", "NANA", "NANI", "DADA", "DADI", "CHACHA"];
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner this time."));
    }
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guests.pop();
guests.pop();
