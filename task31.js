var users = ["Aliya", "Suba", "Subuhi"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    while (users.length > 0) {
        var removedUser = users.pop();
        console.log("Removing user: ".concat(removedUser));
    }
    console.log("All users have been removed.");
}
