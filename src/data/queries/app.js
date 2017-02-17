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

import AppInformationType from '../types/AppInformationType';

const app = {
  type: AppInformationType,
  args: {
    appId: { type: StringType },
    language: { type: StringType },
  },
  async resolve({ request }, { appId, language }, { loaders }) {
    return loaders.app.load(`${appId}_${language}`);
  },
};

export default app;
