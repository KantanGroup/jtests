import DataLoader from 'dataloader';

import fetch from '../core/fetch';
import { baseURL, topSize } from '../config';

/* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
function getJSONFromRelativeURL(relativeURL) {
  // console.log(`${baseURL}${relativeURL}`);
  return fetch(`${baseURL}${relativeURL}`)
    .then(res => res.json());
}

function getAppInformation(id) {
  return getJSONFromRelativeURL(`/appInformationSolrs/${id}`);
}

function getAppTrend(id) {
  const params = id.split('___');
  const countryCode = params[0];
  const category = params[1];
  const collection = params[2];
  const appId = params[3];
  // http://localhost:9000/api/v1/appTrendSolrs/search/findByCountryCodeAndCategoryAndCollectionAndAppId?countryCode=br&category=all&collection=topgrossing&appId=com.supercell.clashroyale
  return getJSONFromRelativeURL(`/appTrendSolrs/search/findByCountryCodeAndCategoryAndCollectionAndAppId?countryCode=${countryCode}&category=${category}&collection=${collection}&appId=${appId}`)
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

function getIndexApps(id) {
  const params = id.split('___');
  const countryCode = params[0];
  const category = params[1];
  const collection = params[2];
  // http://localhost:9000/api/v1/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollection?countryCode=au&category=books_and_reference&collection=topgrossing
  return getJSONFromRelativeURL(`/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollection?countryCode=${countryCode}&category=${category}&collection=${collection}&size=${topSize}`)
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

const appLoader =
  new DataLoader(keys => Promise.all(keys.map(getAppInformation)), {
    cacheKeyFn: key => `/apps/information/${key}/`,
    cacheMap,
  });

const appIndexLoader =
  new DataLoader(keys => Promise.all(keys.map(getIndexApps)), {
    cacheKeyFn: key => `/apps/index/${key}/`,
    cacheMap,
  });

const appTrendLoader =
  new DataLoader(keys => Promise.all(keys.map(getAppTrend)), {
    cacheKeyFn: key => `/apps/trend/${key}/`,
    cacheMap,
  });

appLoader.loadApp = appLoader.load.bind(appLoader);
appLoader.loadIndex = appIndexLoader.load.bind(appIndexLoader);
appLoader.loadTrend = appTrendLoader.load.bind(appTrendLoader);

const dataloader = {
  app: appLoader,
};

export default dataloader;
