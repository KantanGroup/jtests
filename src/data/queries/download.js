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
  GraphQLNonNull as NonNull,
} from 'graphql';

import PureapkTypes from '../types/PureapkTypes';
import fetch from '../../core/fetch';

const app = {
  type: PureapkTypes,
  args: {
    id: { type: new NonNull(StringType) },
  },
  async resolve({ request }, { id }) {
    const resp = await fetch(`https://api.pureapk.com/m/v1/search/query?hl=en-US&aid=com.apkpure.aegon&flavor=officialMobvista&cv=501&sv=21&key=${id}&limit=1&start=0`,
      {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Auth-Key': 'qNKrYmW8SSUqJ73k3P2yfMxRTo3sJTR',
        },
        mode: 'no-cors',
      },
    );
    return resp.json();
  },
};

export default app;
