import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css("app-root h1")).getText() as Promise<string>;
  }

  clickOnLastLink() {
    return browser.get(`${browser.baseUrl}/posts`) as Promise<any>;
  }

  checkContactUs() {
    element(by.css("app-contactus h1"))
      .getText()
      .then(res => {
        console.log(res);
      });
    return element(by.css("app-contactus h1")).getText();
  }
}
