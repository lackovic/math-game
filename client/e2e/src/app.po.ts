import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPlayerNameInputField() {
    return element(by.css('input'));
  }

  getJoinButton() {
    return element(by.css('button'));
  }

}
