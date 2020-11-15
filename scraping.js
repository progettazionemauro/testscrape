const puppeteer = require('puppeteer');



(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://books.toscrape.com/');
  //await page.screenshot({path: 'sc.png'});
  
  //await page.waitForSelector('#results table tr td a')
  
  const links = await page.$$eval('.product_pod .image_container a', allAs => allAs.map(a => a.href));
  //console.log(links);
  const aoaLinks=links.map(l=>[l]);

const xlsx = require('xlsx');
const wb=xlsx.utils.book_new();
const ws=xlsx.utils.aoa_to_sheet(aoaLinks);     
xlsx.utils.book_append_sheet(wb,ws);
xlsx.writeFile(wb,"link.xlsx");

  //await browser.close();
})();   