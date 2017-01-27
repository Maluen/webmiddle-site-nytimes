# webmiddle-site-nytimes

> The site webmiddle for [The New York Times](https://www.nytimes.com)

## Install

```bash
npm install --save webmiddle-site-nytimes
```

## Usage

```jsx
import WebMiddle from 'webmiddle';
import NyTimes from 'webmiddle-site-nytimes';
const apiKey = process.env.NYTIMES_API_KEY;
const SearchArticles = NyTimes.service('SearchArticles');

const webmiddle = new WebMiddle();
webmiddle.evaluate((
  <SearchArticles
    name="searchArticles"
    query="science"
    pageNumber={0}
    startYear={2007}
    apiKey={apiKey}
  />
), {
  expectResource: true,
})
.then(resource => {
  console.log(resource);
});
```

## Services

### SearchArticles

Uses the [Article Search API](https://developer.nytimes.com/article_search_v2.json). 

**Properties**:

Name        | Example
------------|-------------------------------------
query       | "javascript"
apiKey      | "e735b3bce42631a54e3221bb135ca262"
startYear   | 2007
endYear     | 2010
pageNumber  | 0

**Output**: JSON resource

### ArticleDetails

Scrapes the HTML page of the article with the given url.

Name        | Example
------------|-------------------------------------
url         | "http://www.nytimes.com/2016/12/29/science/pan-starrs-telescope-survey-map.html"

## Settings

- resultsPerPage
