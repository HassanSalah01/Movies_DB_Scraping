const puppeteer = require("puppeteer");
const appendF = require("./appendFile");
// const wr = require("./writeFile");
const ap = require("./appendFile");

(async () => {
    let moviesArray = [];
    let pageNumber = 1;
    for (let i = pageNumber; i < 10; i++) {
        let url = `https://www.themoviedb.org/movie?page=${i}`;
        let pageId = `#page_${i}`;
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(url);
        const test = await page.evaluate((pageId) => {
            const div = [
                ...document.querySelectorAll(`${pageId} .options`),
            ].map((item) => {
                return item.dataset.id + "\n";
            });
            return div;
        }, pageId);
        for (let i of test) {
            await appendF(__dirname + "/test1.txt", i);
        }
        await browser.close();
    }
})();
