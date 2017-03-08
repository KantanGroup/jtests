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
import AppTrendTypes from '../types/AppTrendTypes';

const trend = {
  type: AppTrendTypes,
  args: {
    countryCode: { type: StringType },
    category: { type: StringType },
    appId: { type: StringType },
  },
  async resolve({ request }, { countryCode, category, appId }, { loaders }) {
    const topsellingFree = await loaders.app.loadTrend(`${countryCode}___${category}___topselling_free___${appId}`);
    const topsellingNewFree = await loaders.app.loadTrend(`${countryCode}___${category}___topselling_new_free___${appId}`);
    const topsellingPaid = await loaders.app.loadTrend(`${countryCode}___${category}___topselling_paid___${appId}`);
    const topsellingNewPaid = await loaders.app.loadTrend(`${countryCode}___${category}___topselling_new_paid___${appId}`);
    const topgrossing = await loaders.app.loadTrend(`${countryCode}___${category}___topgrossing___${appId}`);
    return Promise.props({ // wait for all promises to resolve
      topsellingFree: topsellingFree.apps,
      topsellingNewFree: topsellingNewFree.apps,
      topsellingPaid: topsellingPaid.apps,
      topsellingNewPaid: topsellingNewPaid.apps,
      topgrossing: topgrossing.apps,
    });
  },
};

export default trend;
