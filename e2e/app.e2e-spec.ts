import { Flickr2Page } from './app.po';

describe('flickr2 App', function() {
  let page: Flickr2Page;

  beforeEach(() => {
    page = new Flickr2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
