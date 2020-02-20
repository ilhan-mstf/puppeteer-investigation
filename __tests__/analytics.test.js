describe('Design is Dead - Analytics', () => {
    beforeAll(async () => {
      await page.goto('https://designisdead.com/')
    })
  
    it('should return google tag manager', async () => {
      const tagManager = await page.evaluate(() => google_tag_manager)
      expect(tagManager).toBeDefined()
    })
  })