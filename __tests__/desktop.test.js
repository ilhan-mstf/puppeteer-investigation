describe('Design is Dead - Desktop', () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1280, height: 768 })
    await page.goto('https://designisdead.com/')
  })

  it('should not render hamburger menu', async () => {
    await page.waitForSelector('.Page-hamburger', {
      hidden: true
    })
  })
})