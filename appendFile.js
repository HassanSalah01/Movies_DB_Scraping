const fs = require("fs/promises");

const appendF = async (dir, data) => {
    await fs.appendFile(dir, `${data} \n`);
};

module.exports = appendF;
