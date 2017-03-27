import DataLoader from 'dataloader';

import fetch from '../core/fetch';
import { baseURL, appServer, dataServer, topSize, listSize } from '../config';

function getJSONFromRelativeURL(relativeURL) {
  // console.log(`${baseURL}${relativeURL}`); //eslint-disable-line
  return fetch(`${baseURL}${relativeURL}`)
    .then(res => res.json());
}

function getJSONFromDataURL(relativeURL) {
  // console.log(`${baseURL}${relativeURL}`); //eslint-disable-line
  return fetch(`${dataServer}${relativeURL}`)
    .then(res => res.json());
}

function getJSONFromAppURL(relativeURL) {
  // console.log(`${appServer}${relativeURL}`); //eslint-disable-line
  return fetch(`${appServer}${relativeURL}`)
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
  return getJSONFromAppURL(`/developers/${appId}?lang=${languageCode}`);
}

function getSimilarApps(appId) {
  return getJSONFromAppURL(`/apps/${appId}/similar`)
    .then((data) => {
      const index = {};
      if (data.results) {
        index.apps = data.results;
      }
      return index;
    });
}

function getTopDownload(id) {
  const params = id.split('___');
  const numStart = params[0];
  const numEnd = params[1];
  // http://localhost:9000/api/v1/appTrendSolrs/search/findByCountryCodeAndCategoryAndCollectionAndAppId?countryCode=br&category=all&collection=topgrossing&appId=com.supercell.clashroyale
  return getJSONFromDataURL(`/solr/app-information-index/select?indent=on&rows=${topSize}&q=min_installs:[${numStart}%20TO%20${numEnd}]&group=true&group.field=app_id&fl=app_id,developer_id,min_installs,max_installs,title,point&sort=point%20desc&wt=json`)
    .then((data) => {
      const top = {};
      /* eslint no-underscore-dangle: ["error", { "allow": ["app_id"] }]*/
      if (data.grouped.app_id.groups) {
        top.apps = data.grouped.app_id.groups;
      }
      console.log(top); //eslint-disable-line
      return top;
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

const appListLoader =
  new DataLoader(keys => Promise.all(keys.map(getListApps)), {
    cacheKeyFn: key => `/apps/list/${key}/`,
    cacheMap,
  });

const appTrendLoader =
  new DataLoader(keys => Promise.all(keys.map(getAppTrend)), {
    cacheKeyFn: key => `/apps/trend/${key}/`,
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

const appTopDownloadLoader =
  new DataLoader(keys => Promise.all(keys.map(getTopDownload)), {
    cacheKeyFn: key => `/apps/top-download/${key}/`,
    cacheMap,
  });

appLoader.loadApp = appLoader.load.bind(appLoader);
appLoader.loadIndex = appIndexLoader.load.bind(appIndexLoader);
appLoader.loadList = appListLoader.load.bind(appListLoader);
appLoader.loadTrend = appTrendLoader.load.bind(appTrendLoader);
appLoader.loadDeveloper = appDeveloperLoader.load.bind(appDeveloperLoader);
appLoader.loadSimilar = appSimilarLoader.load.bind(appSimilarLoader);
appLoader.loadTopDownload = appTopDownloadLoader.load.bind(appTopDownloadLoader);

const dataloader = {
  app: appLoader,
};

export default dataloader;
