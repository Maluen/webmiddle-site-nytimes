import test from 'ava';
import NyTimes from '../src/index.js';
import WebMiddle, { evaluate, createContext } from 'webmiddle';

const apiKey = process.env.NYTIMES_API_KEY;

test.beforeEach(t => {
  t.context.webmiddle = new WebMiddle();
});

test('SearchArticles', async t => {
  const SearchArticles = NyTimes.service('SearchArticles');

  const resource = await evaluate(createContext(t.context.webmiddle, { expectResource: true }), (
    <SearchArticles
      name="searchArticles"
      query="science"
      pageNumber={0}
      startYear={2007}
      apiKey={apiKey}
    />
  ));

  t.is(resource.contentType, 'application/json');
  t.is(typeof resource.content.root, 'object');
});

test('ArticleDetails', async t => {
  const ArticleDetails = NyTimes.service('ArticleDetails');

  const resource = await evaluate(createContext(t.context.webmiddle, { expectResource: true }), (
    <ArticleDetails
      url="http://www.nytimes.com/2016/12/29/science/pan-starrs-telescope-survey-map.html"
    />
  ));

  t.is(resource.contentType, 'application/json');
  t.is(typeof resource.content.root, 'object');
});
