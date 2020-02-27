# Automated tests with Puppeteer
Software testing is a serious and required task to reach certain quality. This blog post focuses on how it can be automated with Puppeteer. Before going into the details of Puppeteer, we should go over the software testing and clearify the concepts related with testing in software.

## Software Testing
"Production-ready software requires testing before it goes into production" [1]. One approach is to follow manual testing and the other approach is to automate whole testing process. "It's obvious that testing all changes manually is time-consuming, repetitive [, not scalable] and tedious. Repetitive is boring, boring leads to mistakes" [1] that we don't want. Therefore, automation is a great alternative for those repetitive tasks. Further, automation of tests can deliver requested pace and reliability of the software product in a massive scale. In addition to these ensuring the reliability and stability of the software is also very important for the developers in order not to lose time on bugs created by changing code blocks. Especially, it becomes very curial when team size increases.

Test pyramid [2] is a key concept to follow when you want to write automated tests in your software. This concept also defines how much tests you should add into your software. There are three layers of this pyramid:
- Unit Tests 
  - Tests that cover isolated pieces of code, e.g. functions, etc.
- Service Tests 
  - Currently, this is actually accepted as Integration Tests by the community. Tests that cover connected pieces of application, e.g. database, filesystem, etc.
- User Interface Tests
  - Again, this is actually accepted as End-to-End Tests by the community. Tests that cover whole journey of a functionality from user interaction to services, e.g. login flow, purchase flow, etc.

![Test Pyramid](testPyramid.png)

Generally, this pyramid suggests that:
- "Write tests with different granularity" [1]
- "The more high-level you get the fewer tests you should have" [1]

But this approach may not suit for each case. In your software, for instance, you may have less business logic and more integration. In this case, you may want to add more integration tests to your software. Therefore, it is best to think how many tests you should write for each granularity. (You can check this post for more discussion (https://kentcdodds.com/blog/write-tests)[https://kentcdodds.com/blog/write-tests])

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">expect(umbrellaOpens).toBe(true)<br><br>tests: 1 passed, 1 total<br><br>**all tests passed** <a href="https://t.co/p6IKO7KDuy">pic.twitter.com/p6IKO7KDuy</a></p>&mdash; Erin 🐠 (@erinfranmc) <a href="https://twitter.com/erinfranmc/status/1148986961207730176?ref_src=twsrc%5Etfw">July 10, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!--
## When do you need ui testing?
In the days of single page application frameworks like react, angular, ember.js and others it becomes apparent that UI tests don't have to be on the highest level of your pyramid - you're perfectly able to unit test your UI in all of these frameworks [1].

## Difference between ui testing and end-to-end testing
ui testing doesn't have to be end-to-end, you may only want to test layout of your application. 

try to reduce the number of end-to-end tests since its hard to maintain them. Therefore, it is a good idea to test most imprtant features of your application.

headless browser (i.e. a browser that doesn't have a user interface)
-->

### When do you really need end-to-end testing?
high value interaction
it is hard to maintain, costly in terms of computation.

## What is puppeteer?
Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

## Jest and Puppeteer
Writing integration test can be done using Puppeteer API but it can be complicated and hard because API is not designed for testing.

### Use cases:
- Generate screenshots and PDFs of pages.
- Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
- Automate form submission, UI testing, keyboard input, etc.
- Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
- Capture a timeline trace of your site to help diagnose performance issues.
- Test Chrome Extensions.

You need a web-ui to use this tool.

- Check for Console Logs and Exceptions with Puppeteer
- Replicate User Activity with Faker and Puppeteer
- Work with Document Cookies in Tests with Puppeteer


Schedule Selenium Test Automation At Peak Hours
https://www.lambdatest.com/blog/why-selenium-automation-testing-in-production-is-pivotal-for-your-next-release/

Regression Testing Effort

### Who uses puppeteer for what
Coursera - https://medium.com/coursera-engineering/improving-end-to-end-testing-at-coursera-using-puppeteer-and-jest-5f1bac9cd176


### How to use it? Which languages?
It is a Node library, therefore its api is 

### How to plug it to the ci/cd?

### Running puppeteer on serverless
You should allocate at least 512 MB of RAM to your Lambda, however 1600 MB (or more) is recommended.
https://github.com/alixaxel/chrome-aws-lambda

### How to install?
- Recent stable version of node.js
- Recent stable version of npm or yarn

You can use your own chrome in your computer. or you can use download it when installing.

`executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'`

`which google-chrome-stable`

### Samples
This section gives a couple of examples to give you a better insights of its usage. They don't cover all the futures of the puppeteer.

Tests are also available at github page.

jest-puppeteer
you need another library to add fully featured testing capabalities to puppeteer since it doesn't provide you. In this blog post jest is used as tesing framework.

#### Taking Screenshot
You can take screenshot of your website with different options. In certain times for example (in every 200 ms for example), or in different screen sizes.

#### Comparing Screenshot
You may want to check visually your elements how are they rendered and you can check them with the previous version. You need another tool to compare images. There are concerns to be cared which they are 
- when texts are changes you are going to see as a change
- 

https://github.com/mapbox/pixelmatch
https://meowni.ca/posts/2017-puppeteer-tests/

#### Check layout
For example, you can check that visual elements are rendered or not.

#### Checking integration with third party application
Especially third party application uses third party applications for analytics purposes. Therefore, it will be good idea to check integration with your website and their service.

<!-- signup, redirects -->

#### Mobile and Desktop Layout
Since there is significant variance in screen sizes, there are a lot cases need to be tested here.

```js
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];

describe('Mobile', () => {
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
```

```js
describe('Desktop', () => {
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
```

#### Seo checks
Since search engines crawl your production website, it may be a good idea to check your pages seo performance. However, even if below examples handles this issue on test cases, you may want to generate a score and corresponding report.

### Selenium and other testing tools

<!--https://www.npmjs.com/package/selenium-webdriver-->

## References:
[1] https://martinfowler.com/articles/practical-test-pyramid.html
[2] Mike Cohn, Succeeding with Agile

Add this also:
https://martinfowler.com/bliki/TestPyramid.html 
https://kentcdodds.com/blog/write-tests
https://www.freecodecamp.org/news/why-end-to-end-testing-is-important-for-your-team-cb7eb0ec1504/
https://blogs.dropbox.com/tech/2019/05/athena-our-automated-build-health-management-system/
https://medium.com/coursera-engineering/improving-end-to-end-testing-at-coursera-using-puppeteer-and-jest-5f1bac9cd176

## Acknowledgements
