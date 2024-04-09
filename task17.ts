let guests: string[] = ["Alice", "NANA", "NANI", "DADA", "DADI", "CHACHA"];
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

while (guests.length > 2) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
    }
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});guests.pop();
guests.pop();
