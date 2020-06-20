const puppeteer = require('puppeteer');
const { argv } = require('process');

(exports.fetch = async() => {
    const browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuidjj-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.goto('https://www.smbc-card.com/olentry/online_nyukai/login_display.do', {waitUntil: "domcontentloaded"});

    // 多少待たないとレンダリングが間に合わないっぽい
    await page.waitFor(5000);

    // await page.screenshot({path: 'home1.png', fullPage: true});
    

    // 必要項目の入力
    await page.type('input[name="barcode1"]', argv[2]); 
    await page.type('input[name="barcode2"]', argv[3]); 
    await page.type('input[name="barcode3"]', argv[4]);
    await page.type('input[name="birthday"]', argv[5]);
    await page.type('input[name="tel1"]', argv[6]);
    await page.type('input[name="tel2"]', argv[7]);
    await page.type('input[name="tel3"]', argv[8]);

    const button = await page.$('input[type="image"]');
    await button.click();
    
    // await page.screenshot({path: 'logout.png', fullPage: true});

    // 多少待たないとレンダリングが間に合わないっぽい
    await page.waitFor(5000);

    var data = await page.$eval('.thanks', item => {
      return item.textContent;
    });
    console.log(data);

    browser.close();

})();

