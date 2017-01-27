import test from 'ava';
import NyTimes from '../src/index.js';
import WebMiddle from 'webmiddle';

const apiKey = process.env.NYTIMES_API_KEY;

test.beforeEach(t => {
  t.context.webmiddle = new WebMiddle();
});

test('SearchArticles', async t => {
  const SearchArticles = NyTimes.service('SearchArticles');

  await t.context.webmiddle.evaluate((
    <SearchArticles
      name="searchArticles"
      query="science"
      pageNumber={0}
      startYear={2007}
      apiKey={apiKey}
    />
  ), {
    expectResource: true,
  });
});

test('ArticleDetails', async t => {
  const ArticleDetails = NyTimes.service('ArticleDetails');

  await t.context.webmiddle.evaluate((
    <ArticleDetails
      url="http://www.nytimes.com/2016/12/29/science/pan-starrs-telescope-survey-map.html"
    />
  ), {
    expectResource: true,
  });
});
