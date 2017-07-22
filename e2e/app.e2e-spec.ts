import { NgIdleTimeoutPage } from './app.po';

describe('ng-idle-timeout App', () => {
  let page: NgIdleTimeoutPage;

  beforeEach(() => {
    page = new NgIdleTimeoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
