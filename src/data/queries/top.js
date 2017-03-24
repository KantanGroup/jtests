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
import TopDownloadTypes from '../types/TopDownloadTypes';

const top = {
  type: TopDownloadTypes,
  args: {
    language: { type: StringType },
  },
  async resolve({ request }, { language }, { loaders }) {
    const topA = loaders.app.loadTopDownload('1000000000___5000000000');
    const topB = loaders.app.loadTopDownload('500000000___1000000000');
    const topC = loaders.app.loadTopDownload('100000000___500000000');
    return Promise.props({ // wait for all promises to resolve
      topA,
      topB,
      topC,
    });
  },
};

export default top;
