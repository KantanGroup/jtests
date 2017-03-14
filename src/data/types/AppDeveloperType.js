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

const AppDeveloperType = new ObjectType({
  name: 'AppDeveloper',
  fields: {
    id: { type: new NonNull(StringType) },
    index: { type: IntegerType },
    title: { type: StringType },
    appId: { type: StringType },
    summary: { type: StringType },
    icon: { type: StringType },
    developerId: { type: StringType },
    score: { type: FloatType },
    price: { type: StringType },
  },
});

export default AppDeveloperType;
