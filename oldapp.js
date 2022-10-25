import Puppeteer  from "puppeteer";

async function start(){
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://eune.op.gg/champions");
    ;
    const newPage = await page.evaluate(()=>{
        const x = []
        const s = document.querySelectorAll("#content-container > aside > nav");
        for(let i = 0 ; i < s.length ; i ++){
            x.push({
                // Name: s[0].innerText,
                href :s[0].href
            });
        }
        return x;
    })
    console.log(newPage);
    await browser.close();
    
};

start();



// ex:1 working
// async function start(){
//     const browser = await Puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://eune.op.gg/champions");
//     ;
//     const newPage = await page.evaluate(()=>{
//         const x = []
//         const s = document.querySelectorAll(".css-xars9p > small");
//         for(let i = 0 ; i < s.length ; i ++){
//             x.push(s[i].innerText);
//         }
//         return x;
//     })
//     console.log(newPage);
//     await browser.close();
    
// };

// start();



