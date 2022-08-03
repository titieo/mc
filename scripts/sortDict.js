const fs = require("fs");

process.chdir(__dirname);

console.log("Reading main.txt");
let dictionary = fs.readFileSync("../dict/main.txt", { encoding: "UTF8" })
                    .replace("\r", "").split("\n");

dictionary = dictionary.filter(string => string != "");

dictionary = dictionary.filter((string, index) => dictionary.indexOf(string) == index);

// dictionary = dictionary.filter(string => !ocDictionary.includes(string));

console.log("Sorting...");
dictionary.sort();

console.log("Writing main.txt");
fs.writeFileSync("../dict/main.txt", dictionary.join("\n"));
