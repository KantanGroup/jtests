import DataLoader from 'dataloader';

import fetch from '../core/fetch';
import { baseURL } from '../config';

/* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
function getJSONFromRelativeURL(relativeURL) {
  // console.log(`${baseURL}${relativeURL}`);
  return fetch(`${baseURL}${relativeURL}`)
    .then(res => res.json());
}

function getAppInformation(id) {
  return getJSONFromRelativeURL(`/appInformationSolrs/${id}`);
}

const cacheMap = new Map();

const appLoader =
  new DataLoader(keys => Promise.all(keys.map(getAppInformation)), {
    cacheKeyFn: key => `/apps/information/${key}/`,
    cacheMap,
  });

appLoader.loadApp = appLoader.load.bind(appLoader);

const dataloader = {
  app: appLoader,
};

export default dataloader;
