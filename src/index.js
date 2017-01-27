import WebMiddle from 'webmiddle';
import config from './config';
import * as services from './services';

export default new WebMiddle({
  name: 'nytimes.com',
  settings: config,
  services,
});
