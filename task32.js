var current_users = ["ali", "zara", "ahmed", "fatima", "mohammad"];
var new_users = ["sana", "ali", "asma", "umer", "FATIMA"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.indexOf(new_user_lower)) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
