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
  GraphQLInt as IntegerType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const AppIndexType = new ObjectType({
  name: 'AppIndex',
  fields: {
    id: { type: new NonNull(StringType) },
    index: { type: IntegerType },
    title: { type: StringType },
    appId: { type: StringType },
    countryCode: { type: StringType },
    category: { type: StringType },
    collection: { type: StringType },
    icon: { type: StringType },
    developerId: { type: StringType },
    score: { type: FloatType },
    price: { type: StringType },
  },
});

export default AppIndexType;
