# webmiddle-site-nytimes

> The site [webmiddle](https://github.com/webmiddle/webmiddle) for [The New York Times](https://www.nytimes.com)

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

It is just a wrapper of the [Article Search API](https://developer.nytimes.com/article_search_v2.json). 

**Properties**:

Name                   | Example
-----------------------|-------------------------------------
query                  | "javascript"
apiKey                 | "e735b3bce42631a54e3221bb135ca262"
startYear (optional)   | 2007
endYear (optional)     | 2010
pageNumber             | 0

**Output**: JSON resource as in the API.

### ArticleDetails

Scrapes the HTML page of the article with the given url.  
The output includes the full article text.

**Properties**:

Name        | Example
------------|-------------------------------------
url         | "http://www.nytimes.com/2012/10/11/business/smallbusiness/small-companies-seek-to-push-sales-and-marketing-with-own-apps.html"

**Output**: JSON resource

```json
{
    "url": "http://www.nytimes.com/2012/10/11/business/smallbusiness/small-companies-seek-to-push-sales-and-marketing-with-own-apps.html",
    "title": "Even Small Players Can Seize the Day With an App Strategy",
    "description": "Consumers now expect nearly every brand to have its own app, and small businesses feel pressured to create and publish them.",
    "date": "Aug 3, 2014",
    "image": "http://www.nytimes.com/images/2012/10/11/business/11sbiz/11sbiz-thumbStandard.jpg",
    "category": "Small Business",
    "text": "In the summer of 2010, Sheri Gurock, co-founder of Magic Beans, a retailer specializing in toys and baby gear, decided..."
  }
```

## Settings

Name           | Description
---------------|--------------------------------------------------
resultsPerPage | Number of articles in each "search articles" page
