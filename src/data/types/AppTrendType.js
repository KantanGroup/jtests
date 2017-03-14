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
  GraphQLFloat as IntegerType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const AppTrendType = new ObjectType({
  name: 'AppTrend',
  fields: {
    id: { type: new NonNull(StringType) },
    index: { type: IntegerType },
    appId: { type: StringType },
    countryCode: { type: StringType },
    category: { type: StringType },
    collection: { type: StringType },
    point: { type: FloatType },
    price: { type: StringType },
    createAt: { type: StringType },
  },
});

export default AppTrendType;
