import DataLoader from 'dataloader';
import { host } from '../config';
import fetch from '../core/fetch';

const BASE_URL = `http://${host}/applestore/apps`;

function getApps(page) {
  return fetch(`${BASE_URL}?start=${page * 60}`)
    .then(res => res.json())
    .then(data => data.results);
}

function getApp(id) {
  const params = id.split('___');
  if (params.length === 2) {
    const appId = params[0];
    const languageCode = params[1];
    return fetch(`${BASE_URL}/${appId}/?lang=${languageCode}`)
      .then(res => res.json());
  }
  const appId = params[0];
  return fetch(`${BASE_URL}/${appId}`)
    .then(res => res.json());
}

const cacheMap = new Map();

const appLoader =
  new DataLoader(keys => Promise.all(keys.map(getApp)), {
    cacheKeyFn: key => `/applestore/app/${key}/`,
    cacheMap,
  });

const appsLoader =
  new DataLoader(keys => Promise.all(keys.map(getApps)), {
    cacheKeyFn: key => `/applestore/apps/${key}/`,
    cacheMap,
  });

appLoader.loadAll = appsLoader.load.bind(appsLoader);

const appleplay = {
  app: appLoader,
};

export default appleplay;
