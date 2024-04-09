function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

make_sandwich("Cheese", "Tomato", "Lettuce");
make_sandwich("Chicken", "Mayonnaise");
make_sandwich("Tuna");
