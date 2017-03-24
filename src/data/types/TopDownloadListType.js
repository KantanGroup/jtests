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
  GraphQLFloat as FloatType,
} from 'graphql';

import TopDownloadType from './TopDownloadType';

const TopDownloadListType = new ObjectType({
  name: 'TopDownloadList',
  fields: {
    numFound: { type: FloatType },
    start: { type: FloatType },
    docs: { type: TopDownloadType },
  },
});

export default TopDownloadListType;
