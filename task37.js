function make_shirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " T-shirt with the message: \"").concat(message, "\""));
}
make_shirts();
make_shirts("medium");
make_shirts("small", "Hello, OpenAI!");
