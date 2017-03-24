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

import TopDownloadListType from './TopDownloadListType';

const TopDownloadTypes = new ObjectType({
  name: 'TopDownloads',
  fields: {
    groupValue: { type: StringType },
    doclist: { type: new List(TopDownloadListType) },
  },
});

export default TopDownloadTypes;
