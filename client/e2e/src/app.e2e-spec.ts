import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const bec = browser.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Math Game!');
  });

  it('should not join the game without a player name', async () => {
    page.navigateTo();
    const initialUrl = browser.getCurrentUrl();
    await page.getJoinButton().click();
    expect(browser.getCurrentUrl()).toBe(initialUrl);
  });

});
