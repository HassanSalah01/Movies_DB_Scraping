const fs = require("fs");
const readline = require("readline");
const appendF = require("./appendFile");
const arr = [];
async function processLineByLine(fileName) {
    const fileStream = fs.createReadStream(fileName);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        arr.push(line);
        // console.log(`${line}`);
    }
    return arr;
}
// const x = processLineByLine();
// x.then((data) => {
//     for (let i of data) {
//         let name = `https://www.themoviedb.org/movie/${i} \n`;
//         appendF(__dirname + "/fullLink.txt", name);
//     }
// });
module.exports = processLineByLine;

// for (let i = 1; i < 4; i++) {
//     console.log(`page_${i}`);
// }
// let pageNumber = 1;
// for (let i = pageNumber; i < 5; i++) {
//     let url = `https://www.themoviedb.org/movie?page=${i}`;
//     let pageId = `#page_${i}`;
//     console.log(url);
//     console.log(pageId);
// }
// const fs = require("fs/promises");

// const app = async () => {
//     await fs.appendFile(__dirname + "/lvo.txt", "welcome Home \n");
// };

// app();
