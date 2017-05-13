/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLList as List,
} from 'graphql';

import PureapkType from './PureapkType';

const PureapkTypes = new ObjectType({
  name: 'Pureapks',
  fields: {
    error: { type: StringType },
    result: { type: new List(PureapkType) },
  },
});

export default PureapkTypes;
