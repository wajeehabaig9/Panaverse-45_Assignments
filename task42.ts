function show_magicianss(magiciansss: string[]): void {
    for (let magician of magiciansss) {
        console.log(magician);
    }
}

function make_great(magiciansss: string[]): string[] {
    for (let i = 0; i < magiciansss.length; i++) {
        magiciansss[i] = `the Great ${magiciansss[i]}`;
    }
    return magiciansss;
}

let magiciansss: string[] = ["Kamran", "Sanaullah", "Fahad", "Sobia", "Zara"];
magiciansss = make_great(magiciansss);
show_magicianss(magiciansss);
