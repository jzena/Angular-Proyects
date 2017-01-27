import { RestaurantesAn2prodPage } from './app.po';

describe('restaurantes-an2prod App', function() {
  let page: RestaurantesAn2prodPage;

  beforeEach(() => {
    page = new RestaurantesAn2prodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
