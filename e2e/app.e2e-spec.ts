import { CestakWebPage } from './app.po';

describe('cestak-web App', () => {
  let page: CestakWebPage;

  beforeEach(() => {
    page = new CestakWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
