function make_shirts(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} T-shirt with the message: "${message}"`);
}

make_shirts();
make_shirts("medium");
make_shirts("small", "Hello, OpenAI!");
