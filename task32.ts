let current_users: string[] = ["ali", "zara", "ahmed", "fatima", "mohammad"];
let new_users: string[] = ["sana", "ali", "asma", "umer", "FATIMA"];
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    let new_user_lower: string = new_user.toLowerCase();
    if (current_users_lower.indexOf(new_user_lower)) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
