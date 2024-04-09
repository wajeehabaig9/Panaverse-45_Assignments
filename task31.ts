let users: string[] = ["Aliya","Suba","Subuhi"];  

if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    while (users.length > 0) {
        let removedUser: string = users.pop()!;
        console.log(`Removing user: ${removedUser}`);
    }
    console.log("All users have been removed.");
}
