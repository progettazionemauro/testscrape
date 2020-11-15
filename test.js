const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://example.webscraping.com/places/default/search');
  //await page.screenshot({path: 'sc.png'});
  await page.type('#search_term', 'bolivia');
  await page.click('#id');
  await page.waitForSelector('#results table tr td a')
  await page.click('#results table tr td a');
  

  //await browser.close();
})();   