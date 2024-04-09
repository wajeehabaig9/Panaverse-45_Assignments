function show_magiciansss(magicNames: string[]): void {
    for (let magician of magicNames) {
        console.log(magician);
    }
}

function make_greats(magicNames: string[]): string[] {
    let great_magicNames: string[] = [];
    for (let magician of magicNames) {
        great_magicNames.push(`the Great ${magician}`);
    }
    return great_magicNames;
}

let magicNames: string[] = ["Ali", "Fatima", "Saeed", "Zara", "Imran"];
let great_magicNames: string[] = make_greats(magicNames.slice());

show_magiciansss(magicNames);
console.log("--------------------------");
show_magiciansss(great_magicNames);
