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

import AppIndexType from '../types/AppIndexType';
import fetch from '../../core/fetch';
import { baseURL } from '../../config';

/* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
function getJSONFromRelativeURL(relativeURL) {
  return fetch(`${baseURL}${relativeURL}`)
    .then(res => res.json());
}

function getIndexApps(countryCode, category, collection) {
  return getJSONFromRelativeURL(`/appIndexElasticSearches/search/findByCountryCodeAndCategoryAndCollection?countryCode=${countryCode}&category=${category}&collection=${collection}`)
    .then(data => {
      const index = {};
      /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }]*/
      if (data._embedded) {
        index.apps = data._embedded;
        index.apps.sort((a, b) => a.index - b.index);
      }

      if (data.page) {
        index.page = data.page;
      }
      return index;
    });
}

const index = {
  type: AppIndexType,
  args: {
    countryCode: { type: StringType },
    category: { type: StringType },
    collection: { type: StringType },
  },
  async resolve({ request }, { countryCode, category, collection }) {
    return getIndexApps(countryCode, category, collection);
  },
};

export default index;
