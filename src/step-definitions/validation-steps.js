const { Then } = require('@wdio/cucumber-framework');
const pages = require('../pom');
const compareText = require('./utils/compare-text');

Then(
  'Page title should {string} {string}',
  async function (shouldBeParam, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParam);
  }
);

Then(/^modal window should ( not)? be displayed$/, async notArg => {
  let assert = expect(pages('doctors').addDoctorsModal.rootEl);
  if (param) {
    assert = assert.not;
  }
  return assert.toBeDisplated();
});
