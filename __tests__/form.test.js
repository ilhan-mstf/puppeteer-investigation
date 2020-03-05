describe('Design is Dead - Layout', () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1280, height: 768 })
    await page.goto('https://designisdead.com/')
  })

  it('should show error message when fields are empty', async () => {
    const contact = await page.waitForSelector(".Navigation-link.Navigation-contact")
    await contact.click()
    const submit = await page.waitForSelector("#_form_10_submit")
    await submit.click()
    const className = await page.evaluate(() => document.querySelector('input[name=fullname]').className)
    
    expect(className).toEqual(expect.stringContaining('_has_error'))
  })
})