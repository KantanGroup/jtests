/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLList as List,
} from 'graphql';

import AppTrendType from './AppTrendType';

const AppTrendTypes = new ObjectType({
  name: 'AppTrends',
  fields: {
    topsellingFree: { type: new List(AppTrendType) },
    topsellingNewFree: { type: new List(AppTrendType) },
    topsellingPaid: { type: new List(AppTrendType) },
    topsellingNewPaid: { type: new List(AppTrendType) },
    topgrossing: { type: new List(AppTrendType) },
  },
});

export default AppTrendTypes;
