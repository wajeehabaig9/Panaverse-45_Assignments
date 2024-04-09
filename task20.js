var Pakistan = [
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
Pakistan.forEach(function (landmark, index) {
    console.log("".concat(index + 1, ". ").concat(landmark));
});
