const timeout = 5000


let array = ['medvedevdenis12@gmail.com', 'https://jestjs.io/docs/en/puppeteer']

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://google.com')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('google')
    })
  },
  timeout
)
