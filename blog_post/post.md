# Automated tests with Puppeeter
Testing of software products is a serious and required task and this blog post focus on how it can be automated with Puppeeter. Before going into the details of Puppeeter, we should go over the software testing and make clear the concepts and levels of it.

## Testing of a Software
"Production-ready software requires testing before it goes into production" [1]. One approach is to follow manual testing and the other approach is to automate whole testing process. "It's obvious that testing all changes manually is time-consuming, repetitive and tedious. Repetitive is boring, boring leads to mistakes and makes you look for a different job by the end of the week" [1]. Therefore, automation is a great alternative for these repetitive tasks. Further, automation of tests can deliver requested pace and reliability of the software product.

<!--Even if you change small part of the software, it may effect other parts therefore to make sure that everything works as expected you need test-->

Test pyramid is a common concept to follow when you want to apply automated tests in your software. This concept also defines how much tests you should add into your system. There are three layers of these pyramid:
- Unit Tests
- Service Tests
- User Interface Tests

![Test Pyramid](testPyramid.png)

Generally, this pyramid suggests that:
- Write tests with different granularity
- he more high-level you get the fewer tests you should have

## When do you need ui testing?
In the days of single page application frameworks like react, angular, ember.js and others it becomes apparent that UI tests don't have to be on the highest level of your pyramid - you're perfectly able to unit test your UI in all of these frameworks.[1]

## Difference between ui-testing and end-to-end testing
ui testing doesn't have to be end-to-end, you may only want to test layout of your application. 

try to reduce the number of end-to-end tests since its hard to maintain them. Therefore, it is a good idea to test most imprtant features of your application.

headless browser (i.e. a browser that doesn't have a user interface)

## What is puppeteer?
Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

### Use cases:
- Generate screenshots and PDFs of pages.
- Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
- Automate form submission, UI testing, keyboard input, etc.
- Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
- Capture a timeline trace of your site to help diagnose performance issues.
- Test Chrome Extensions.

You need a web-ui to use this tool.

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

#### Taking Screenshot
You can take screenshot of your website with different options. In certain times for example (in every 200 ms for example), or in different screen sizes.

#### Comparing Screenshot
You may want to check visually your elements how are they rendered and you can check them with the previous version. You need another tool to compare images. There are concerns to be cared which they are 
- when texts are changes you are going to see as a change
- 

#### Check layout
For example, you can check that visual elements are rendered or not.

#### Checking integration with third party application
Especially third party application uses third party applications for analytics purposes. Therefore, it will be good idea to check integration with your website and their service.

#### Mobile and desktop 
Since there is significant variance in screen sizes, there are a lot cases needs to be tested here.

#### Seo checks

### Selenium and other testing tools

<!--https://www.npmjs.com/package/selenium-webdriver-->

## References:
[1] https://martinfowler.com/articles/practical-test-pyramid.html