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
  GraphQLString as StringType,
  GraphQLList as List,
} from 'graphql';

import AppSimilarType from './AppSimilarType';

const AppSimilarTypes = new ObjectType({
  name: 'AppSimilars',
  fields: {
    devId: { type: StringType },
    apps: { type: new List(AppSimilarType) },
  },
});

export default AppSimilarTypes;
