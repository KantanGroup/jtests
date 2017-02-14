import DataLoader from 'dataloader';

import fetch from '../core/fetch';
import { baseURL } from '../config';

/* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
function getJSONFromRelativeURL(relativeURL) {
  // console.log(`${baseURL}${relativeURL}`);
  return fetch(`${baseURL}${relativeURL}`)
    .then(res => res.json());
}

function getIndexApps(countryCode, category, collection) {
  return getJSONFromRelativeURL(`/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollection?countryCode=${countryCode}&category=${category}&collection=${collection}`)
    .then((data) => {
      const index = {};
      /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
      if (data._embedded) {
        index.apps = data._embedded.appIndexSolrs;
        index.apps.sort((a, b) => a.index - b.index);
      }

      if (data.page) {
        index.page = data.page;
      }
      return index;
    });
}

const cacheMap = new Map();

const indexAppLoader =
  new DataLoader(keys => Promise.all(keys.map(getIndexApps)), {
    cacheKeyFn: key => `/apps/index/${key}/`,
    cacheMap,
  });

indexAppLoader.loadIndex = indexAppLoader.load.bind(indexAppLoader);

const dataloader = {
  index: indexAppLoader,
};

export default dataloader;
