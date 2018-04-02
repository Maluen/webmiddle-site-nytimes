import test from 'ava';
import { services } from '../src/index.js';
import WebMiddle, { evaluate, createContext } from 'webmiddle';

const apiKey = process.env.NYTIMES_API_KEY;

test.beforeEach(t => {
  const webmiddle = new WebMiddle();
  t.context.context = createContext(webmiddle);
});

test('SearchArticles', async t => {
  const { SearchArticles } = services;

  const resource = await evaluate(createContext(t.context.context, { expectResource: true }), (
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
  const { ArticleDetails } = services;

  const resource = await evaluate(createContext(t.context.context, { expectResource: true }), (
    <ArticleDetails
      url="http://www.nytimes.com/2016/12/29/science/pan-starrs-telescope-survey-map.html"
    />
  ));

  t.is(resource.contentType, 'application/json');
  t.is(typeof resource.content.root, 'object');
});
