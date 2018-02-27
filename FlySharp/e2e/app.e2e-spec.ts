import { FlySharpPage } from './app.po';

describe('fly-sharp App', () => {
  let page: FlySharpPage;

  beforeEach(() => {
    page = new FlySharpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
