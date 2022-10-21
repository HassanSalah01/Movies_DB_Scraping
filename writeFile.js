// import { writeFile } from "fs/promises";
const fs = require("fs/promises");
const { builtinModules } = require("module");

const writeF = async (dir, data) => {
    await fs.writeFile(dir, data);
};

module.exports = writeF;
