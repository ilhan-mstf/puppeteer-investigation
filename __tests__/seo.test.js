describe('Design is Dead - SEO', () => {
  beforeAll(async () => {
    await page.goto('https://designisdead.com/')
  })

  it('should display "Design is Dead" text on title', async () => {
    await expect(page.title()).resolves.toMatch('Design is Dead')
  })

  it('should have description meta-tag', async () => {
    const descriptionContent = await page.$eval("head > meta[name='description']", element => element.content);
    
    expect(descriptionContent).toBeDefined();
  })

  it('should have a headline', async () => {
    const headlines = await page.$$('h1')

    expect(headlines.length).toBe(1)
  })
})