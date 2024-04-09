let GuestList = ["Chacha", "Chachi", "Dadi"];
console.log("Original Invitations:");
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Dear ${GuestList[i]},\nYou are cordially invited to dinner.\n Wajeeha\n`);
}let updatedGuestList = [...GuestList]; 
updatedGuestList[1] = "Nikola Tesla";