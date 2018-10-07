import test from 'ava';
import nytimes from '../src/index.js';
import { rootContext, isResource } from 'webmiddle';

const { components } = nytimes;

const apiKey = process.env.NYTIMES_API_KEY;

test('SearchArticles', async t => {
  const { SearchArticles } = components;

  const resource = await rootContext.extend({
    expectResource: true
  }).evaluate(
    <SearchArticles
      name="searchArticles"
      query="science"
      pageNumber={0}
      startYear={2007}
      apiKey={apiKey}
    />
  );

  t.true(isResource(resource));
  t.is(resource.contentType, 'application/json');
  t.is(typeof resource.content.root, 'object');
});

test('ArticleDetails', async t => {
  const { ArticleDetails } = components;

  const resource = await rootContext.extend({
    expectResource: true
  }).evaluate(
    <ArticleDetails
      url="http://www.nytimes.com/2016/12/29/science/pan-starrs-telescope-survey-map.html"
    />
  );

  t.true(isResource(resource));
  t.is(resource.contentType, 'application/json');
  t.is(typeof resource.content.root, 'object');
});
