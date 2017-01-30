import { AppJqueryPage } from './app.po';

describe('app-jquery App', function() {
  let page: AppJqueryPage;

  beforeEach(() => {
    page = new AppJqueryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
