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

const index = {
  type: AppIndexTypes,
  args: {
    countryCode: { type: StringType },
    category: { type: StringType },
    collection: { type: StringType },
  },
  async resolve({ request }, { countryCode, category, collection }, { loaders }) {
    const topapps = await loaders.app.loadList(`${countryCode}___${category}___${collection}`);
    return Promise.props({ // wait for all promises to resolve
      topapps: topapps.apps,
    });
  },
};

export default index;
