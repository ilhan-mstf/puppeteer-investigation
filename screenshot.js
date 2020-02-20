const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://designisdead.com/');
  await page.screenshot({path: 'designisdead_home_page.png'});

  await browser.close();
})();