let guestss: string[] = ["Khadija", "Almeera", "Abiha", "Wajeeha", "Brother", "Sister"];
console.log("the new dinner table won't arrive in time, and we can only invite two people for dinner.");
while (guestss.length > 2) {
    const removedGuest = guestss.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
    }
}
console.log(`Number of people invited to dinner: ${guestss.length}`);
guestss.forEach(guests => {
    console.log(`Dear ${guests}, you are still invited to dinner.`);
});
guestss.pop();
guestss.pop();
