const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];

describe('Design is Dead - Mobile', () => {
  beforeAll(async () => {
    await page.emulate(iPhonex)
    await page.goto('https://designisdead.com/')
  })

  it('should render hamburger menu', async () => {
    await page.waitForSelector('.Page-hamburger', {
      visible: true
    })
  })
})