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
import AppObjectType from '../types/AppObjectType';

const app = {
  type: AppObjectType,
  args: {
    appId: { type: StringType },
    language: { type: StringType },
  },
  async resolve({ request }, { appId, language }, { loaders }) {
    const application = loaders.app.load(`${appId}_${language}`);
    // const developer = loaders.app.loadDeveloper(`${appId}_${language}`);
    const similar = loaders.app.loadSimilar(`${appId}`);
    return Promise.props({ // wait for all promises to resolve
      app: application,
      // developer,
      similar,
    });
  },
};

export default app;
