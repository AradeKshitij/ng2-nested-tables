import { ReportProjectPage } from './app.po';

describe('report-project App', function() {
  let page: ReportProjectPage;

  beforeEach(() => {
    page = new ReportProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
