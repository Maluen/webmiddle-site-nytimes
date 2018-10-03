import { PropTypes } from 'webmiddle';
import Pipe from 'webmiddle-component-pipe';
import HttpRequest from 'webmiddle-component-http-request';
import JSONSelectToJson from 'webmiddle-component-jsonselect-to-json';

// component specific
// format: YYYYMMDD
function formatYear(year) {
  return `${year}0101`;
}

function SearchArticles({ query, apiKey, startYear, endYear, pageNumber }) {
  return (
    <Pipe>
      <HttpRequest
        name="rawJson"
        contentType="application/json"
        url={
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(query)}` +
          `&response-format=json&api-key=${encodeURIComponent(apiKey)}` +
          `${startYear ? `&begin_date=${encodeURIComponent(formatYear(startYear))}` : ''}` +
          `${endYear ? `&end_date=${encodeURIComponent(formatYear(endYear))}` : ''}` +
          `&page=${encodeURIComponent(pageNumber)}`
        }
      />

      {({ rawJson }) =>
        <JSONSelectToJson
          name="searchArticles"
          from={rawJson}
          fullConversion
        />
      }
    </Pipe>
  );
}

SearchArticles.propTypes = {
  query: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  pageNumber: PropTypes.number.isRequired,
};

export default SearchArticles;
