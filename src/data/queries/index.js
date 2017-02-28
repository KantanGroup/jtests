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
  },
  async resolve({ request }, { countryCode, category }, { loaders }) {
    const topsellingFree = await loaders.app.loadIndex(`${countryCode}_${category}_topselling_free`);
    const topsellingNewFree = await loaders.app.loadIndex(`${countryCode}_${category}_topselling_new_free`);
    const topsellingPaid = await loaders.app.loadIndex(`${countryCode}_${category})topselling_paid`);
    const topsellingNewPaid = await loaders.app.loadIndex(`${countryCode}_${category}_topselling_new_paid`);
    const topgrossing = await loaders.app.loadIndex(`${countryCode}_${category}_topgrossing`);
    return Promise.props({ // wait for all promises to resolve
      topsellingFree: topsellingFree.apps,
      topsellingNewFree: topsellingNewFree.apps,
      topsellingPaid: topsellingPaid.apps,
      topsellingNewPaid: topsellingNewPaid.apps,
      topgrossing: topgrossing.apps,
    });
  },
};

export default index;
