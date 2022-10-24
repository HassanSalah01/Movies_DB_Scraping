import  puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const url = 'https://en.wikipedia.org/wiki/Pink_Floyd#Discography';
    await page.goto(url);

    let result = await page.evaluate(()=>{
        let ele = document.querySelectorAll(".div-col > ul > li >a");
        let eleArr = [...ele];
        return eleArr.map((item)=>{
           return item.innerText;
        })
    })
    console.log(result);
    await browser.close();
})();





    // await page.setDefaultNavigationTimeout(0);
    // await page.waitForNavigation({
    //     waitUntil: 'networkidle0',
    //   });