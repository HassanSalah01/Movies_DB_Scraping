const puppeteer = require("puppeteer");
const processLineByLine = require("./test");

(async () => {
    const x = await processLineByLine("fullLink.txt");
    for (let i of x) {
        let url = `${i}`;
        console.log(i);
        let pageId = `#page_${i}`;
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(url);
        const s = i;
        await page.screenshot({ path: `${i}.jpg` });
        await browser.close();
    }
})();
