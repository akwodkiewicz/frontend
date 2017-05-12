import { ZolcPage } from './app.po';

describe('zolc App', () => {
  let page: ZolcPage;

  beforeEach(() => {
    page = new ZolcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
