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
  GraphQLBoolean as BooleanType,
  GraphQLInt as IntegerType,
  GraphQLFloat as FloatType,
  GraphQLList as List,
} from 'graphql';

const AppInformationType = new ObjectType({
  name: 'AppInformation',
  fields: {
    id: { type: StringType },
    appId: { type: StringType },
    url: { type: StringType },
    title: { type: StringType },
    summary: { type: StringType },
    developerId: { type: StringType },
    developerUrl: { type: StringType },
    icon: { type: StringType },
    point: { type: FloatType },
    price: { type: StringType },
    free: { type: BooleanType },
    developerEmail: { type: StringType },
    developerWebsite: { type: StringType },
    updated: { type: StringType },
    version: { type: StringType },
    minInstalls: { type: IntegerType },
    maxInstalls: { type: IntegerType },
    genre: { type: StringType },
    descriptionHTML: { type: StringType },
    familyGenre: { type: StringType },
    androidVersionText: { type: StringType },
    androidVersion: { type: StringType },
    contentRating: { type: StringType },
    screenshots: { type: new List(StringType) },
    video: { type: StringType },
    playstoreUrl: { type: StringType },
  },
});

export default AppInformationType;
