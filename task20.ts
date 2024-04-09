let Pakistan: string[] = [
    "Badshahi Mosque",
    "Lahore Fort",
    "Shalimar Gardens",
    "Faisal Mosque",
    "Pakistan Monument",
    "K2 (Mount Godwin-Austen)",
    "Hunza Valley",
    "Karimabad",
    "Minar-e-Pakistan",
    "Taxila",
    "Mohatta Palace",
    "Quaid-e-Azam's Mausoleum"
];

console.log("List of famous Places in Pakistan:");
Pakistan.forEach((landmark, index) => {
    console.log(`${index + 1}. ${landmark}`);
});
