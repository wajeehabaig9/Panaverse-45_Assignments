let guestList: string[] = ["Khala", "Khalo", "Nani"];
for (let guest of guestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to Sehri. \n Wajeeha \n`);
}
let guestCancel: string = guestList[1];
guestList[1] = "Nana";


for (let guest of guestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner,\n Wajeeha \n`);

    
}
console.log(`Unfortunately, ${guestCancel} can't make it to the dinner.`);