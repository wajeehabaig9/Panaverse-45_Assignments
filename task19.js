var guestss = ["Khadija", "Almeera", "Abiha", "Wajeeha", "Brother", "Sister"];
console.log("the new dinner table won't arrive in time, and we can only invite two people for dinner.");
while (guestss.length > 2) {
    var removedGuest = guestss.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner this time."));
    }
}
console.log("Number of people invited to dinner: ".concat(guestss.length));
guestss.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", you are still invited to dinner."));
});
guestss.pop();
guestss.pop();
