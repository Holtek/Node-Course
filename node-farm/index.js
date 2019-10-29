const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

const textOut = `somebody once told me the world is gonna roll me ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);
console.log("file has been written");

console.log(textOut);
