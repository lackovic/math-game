import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const bec = browser.ExpectedConditions;
  const playerName = 'Batman';

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

  it('should join the game with a player name', async () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    const initialUrl = browser.getCurrentUrl();
    browser.wait(bec.presenceOf(page.getPlayerNameInputField()));
    await page.getPlayerNameInputField().sendKeys(playerName);
    await page.getJoinButton().click();
    expect((await browser.getCurrentUrl()).endsWith('game/' + playerName)).not.toBe(initialUrl);
  });
});
