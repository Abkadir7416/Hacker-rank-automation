const puppeteer = require("puppeteer");
const codeObj = require("./code");

require('dotenv').config();

const loginLink = "https://www.hackerrank.com/auth/login";
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const openbrowser = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
});

let page;
openbrowser
  .then(function (browserObj) {
    const openbrowserPromise = browserObj.newPage();
    return openbrowserPromise;
  })
  .then(function (newTab) {
    page = newTab;
    const hackerrankOpenPromise = newTab.goto(loginLink);
    return hackerrankOpenPromise;
  })
  .then(function () {
    const emailEntered = page.type(
      "input[aria-label='Your username or email']",
      email
    );
    return emailEntered;
  })
  .then(function () {
    const passwordEntered = page.type(
      "input[aria-label='Your password']",
      password
    );
    return passwordEntered;
  })
  .then(function () {
    const loginButton = page.click("button[type='submit']");
    return loginButton;
  })
  .then(function () {
    const waitforelement = page.waitForSelector(
      "div[data-automation='algorithms']"
    );
    return waitforelement;
  })
  .then(function () {
    const selectDatastructure = page.click("div[data-automation='algorithms']");
    return selectDatastructure;
  })
  .then(function () {
    const waitforelement = page.waitForSelector("input[value='warmup']");
    return waitforelement;
  })
  .then(function () {
    const checkwarmup = page.click("input[value='warmup']");
    return checkwarmup;
  })
  .then(function () {
    const problems = page.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled"
    );
    return problems;
  })
  .then(function (questions) {
    const questionWillBeSolved = questionSolver(
      questions[0],
      codeObj.answer[0]
    );
    return questionWillBeSolved;
  });

function questionSolver(question, answer) {
  return new Promise(function (resolve, reject) {
    const questionWillBeClicked = question.click();
    questionWillBeClicked
      .then(function () {
        const editorInFocusPromise = page.waitForSelector(
          ".monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs",
          page
        );
        return editorInFocusPromise;
      })
      .then(function () {
        const clickOnEditor = page.click(
          ".monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs"
        );
        return clickOnEditor;
      })
      .then(function () {
        const waitforelement = page.waitForSelector(".checkbox-input");
        return waitforelement;
      })
      .then(function (currentpage) {
        const checkinput = page.click(".checkbox-input");
        return checkinput;
      })
      .then(function () {
        // console.log('answer: ', answer);
        const writeAnswer = page.type(".checkbox-input", answer, { delay: 10 });
        return writeAnswer;
      })
      .then(function () {
        const controlIsPressed = page.keyboard.down("Control");
        return controlIsPressed;
      })
      .then(function () {
        const AisPressed = page.keyboard.press("A", { delay: 1000 });
        return AisPressed;
      })
      .then(function () {
        const XisPressed = page.keyboard.press("X", { delay: 1000 });
        return XisPressed;
      })
      .then(function () {
        const controlIsUnPressed = page.keyboard.up("Control");
        return controlIsUnPressed;
      })
      .then(function () {
        const editorInFocusPromise = page.waitForSelector(
          ".monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs",
          page
        );
        return editorInFocusPromise;
      })
      .then(function () {
        const clickOnEditor = page.click(
          ".monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs"
        );
        return clickOnEditor;
      })
      .then(function () {
        const controlIsPressed = page.keyboard.down("Control");
        return controlIsPressed;
      })
      .then(function () {
        const AisPressed = page.keyboard.press("A", { delay: 1000 });
        return AisPressed;
      })
      .then(function () {
        const AisPressed = page.keyboard.press("V", { delay: 1000 });
        return AisPressed;
      })
      .then(function () {
        const controlIsUnPressed = page.keyboard.up("Control");
        return controlIsUnPressed;
      })
      .then(function () {
        const waitforelement = page.waitForSelector(
          ".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled"
        );
        return waitforelement;
      })
      .then(function (currentpage) {
        const submitButton = page.click(
          ".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled"
        );
        return submitButton;
      });
  });
}
