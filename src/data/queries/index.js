/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLString as StringType,
} from 'graphql';

import Promise from 'bluebird';
import AppIndexTypes from '../types/AppIndexTypes';
import fetch from '../../core/fetch';
import { baseURL } from '../../config';

/* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
function getJSONFromRelativeURL(relativeURL) {
  // console.log(`${baseURL}${relativeURL}`);
  return fetch(`${baseURL}${relativeURL}`)
    .then(res => res.json());
}

function getIndexApps(countryCode, category, collection) {
  // http://localhost:9000/api/v1/appIndexSolrs/search/findByCountryCodeAndCategoryAndCollection?countryCode=au&category=books_and_reference&collection=topgrossing
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

const index = {
  type: AppIndexTypes,
  args: {
    countryCode: { type: StringType },
    category: { type: StringType },
    collection: { type: StringType },
  },
  async resolve({ request }, { countryCode, category, collection }) {
    const indexApp = await getIndexApps(countryCode, category, collection);
    return Promise.props({ // wait for all promises to resolve
      apps: indexApp.apps,
    });
  },
};

export default index;
