require('dotenv').config()

describe('Github - Login', () => {
  beforeAll(async () => {
    await page.goto('https://github.com/login')
  })

  it('should log in and redirect', async () => {
    await page.type('#login_field', process.env.GITHUB_USER)
    await page.type('#password', process.env.GITHUB_PWD)
    await page.click('[name="commit"]', {waitUntil: 'domcontentloaded'})
    const uname = await page.$eval('#account-switcher-left > summary > span.css-truncate.css-truncate-target.ml-1', e => e.innerText)
    
    await expect(uname).toMatch(process.env.GITHUB_USER)
  })
})