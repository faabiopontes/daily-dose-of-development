import { AngularAtomsOfApplicationPage } from './app.po';

describe('angular-atoms-of-application App', () => {
  let page: AngularAtomsOfApplicationPage;

  beforeEach(() => {
    page = new AngularAtomsOfApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
