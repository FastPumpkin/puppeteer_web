const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = browser.newPage();
    const navigationPromise = (await page).waitForNavigation();
    await (await page).goto('https://www.axs.com/events/380126');
    // navigationPromise;
    await (await page).waitFor(80000);
    // const title = (await page).title();
    // const url =  (await page).url();
    // console.log(title, url);
    
    await (await page).setViewport({width:1848, height:981});

    await (await page).waitForSelector('.section-event > #event-ticket-options > .c-card > .c-card__column2 > .c-card__btn');
    await (await page).click('.section-event > #event-ticket-options > .c-card > .c-card__column2 > .c-card__btn');
    navigationPromise;
    // await (await page).waitFor(20000)

    // await browser.close();
})();



