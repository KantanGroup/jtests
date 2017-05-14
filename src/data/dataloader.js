import DataLoader from 'dataloader';

import fetch from '../core/fetch';
import { baseURL, appServer, dataServer, topSize, listSize } from '../config';

function getJSONFromRelativeURL(relativeURL) {
  // console.log(`${baseURL}${relativeURL}`); //eslint-disable-line
  return fetch(`${baseURL}${relativeURL}`)
    .then(res => res.json());
}

function getJSONFromDataURL(relativeURL) {
  // console.log(`${dataServer}${relativeURL}`); //eslint-disable-line
  return fetch(`${dataServer}${relativeURL}`)
    .then(res => res.json());
}

function getJSONFromAppURL(relativeURL) {
  // console.log(`${appServer}${relativeURL}`); //eslint-disable-line
  return fetch(`${appServer}${relativeURL}`)
    .then(res => res.json());
}

function getAppInformation(id) {
  //return getJSONFromRelativeURL(`/appInformationSolrs/${id}`);
  const params = id.split('___');
  if (params.length === 2) {
    const appId = params[0];
    const languageCode = params[1];
    return getJSONFromAppURL(`/googlestore/apps/${appId}/?lang=${languageCode}`);
  }
  const appId = params[0];
  return getJSONFromAppURL(`/googlestore/apps/${appId}`);
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
      const trend = {};
      if (data._embedded) { // eslint-disable-line
        trend.apps = data._embedded.appTrendSolrs; // eslint-disable-line
        trend.apps.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
      }
      return trend;
    });
}

function getIndexApps(id) {
  const params = id.split('___');
  const countryCode = params[0];
  const category = params[1];
  const collection = params[2];
  // http://localhost:9000/api/v1/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollectionOrderByIndexAsc?countryCode=au&category=books_and_reference&collection=topgrossing
  return getJSONFromRelativeURL(`/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollectionOrderByIndexAsc?countryCode=${countryCode}&category=${category}&collection=${collection}&size=${topSize}`)
    .then((data) => {
      const index = {};
      if (data._embedded) { // eslint-disable-line
        index.apps = data._embedded.appIndexSolrs; // eslint-disable-line
        index.apps.sort((a, b) => a.index - b.index);
      }
      return index;
    });
}

function getListApps(id) {
  const params = id.split('___');
  const countryCode = params[0];
  const category = params[1];
  const collection = params[2];
  // http://localhost:9000/api/v1/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollectionOrderByIndexAsc?countryCode=au&category=books_and_reference&collection=topgrossing
  return getJSONFromRelativeURL(`/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollectionOrderByIndexAsc?countryCode=${countryCode}&category=${category}&collection=${collection}&size=${listSize}`)
    .then((data) => {
      const index = {};
      if (data._embedded) { // eslint-disable-line
        index.apps = data._embedded.appIndexSolrs; // eslint-disable-line
        index.apps.sort((a, b) => a.index - b.index);
      }
      return index;
    });
}

function getDeveloperApps(id) {
  const params = id.split('___');
  const appId = params[0];
  const languageCode = params[1];
  return getJSONFromAppURL(`/googlestore/developers/${appId}?lang=${languageCode}`);
}

function getSimilarApps(appId) {
  return getJSONFromAppURL(`/googlestore/apps/${appId}/similar`)
    .then((data) => {
      const index = {};
      if (data.results) {
        index.apps = data.results;
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

const appListLoader =
  new DataLoader(keys => Promise.all(keys.map(getListApps)), {
    cacheKeyFn: key => `/apps/list/${key}/`,
    cacheMap,
  });

const appDeveloperLoader =
  new DataLoader(keys => Promise.all(keys.map(getDeveloperApps)), {
    cacheKeyFn: key => `/apps/developer/${key}/`,
    cacheMap,
  });

const appSimilarLoader =
  new DataLoader(keys => Promise.all(keys.map(getSimilarApps)), {
    cacheKeyFn: key => `/apps/similar/${key}/`,
    cacheMap,
  });

appLoader.loadApp = appLoader.load.bind(appLoader);
appLoader.loadIndex = appIndexLoader.load.bind(appIndexLoader);
appLoader.loadTrend = appTrendLoader.load.bind(appTrendLoader);
appLoader.loadList = appListLoader.load.bind(appListLoader);
appLoader.loadDeveloper = appDeveloperLoader.load.bind(appDeveloperLoader);
appLoader.loadSimilar = appSimilarLoader.load.bind(appSimilarLoader);

const dataloader = {
  app: appLoader,
};

export default dataloader;
