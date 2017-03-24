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
  GraphQLFloat as FloatType,
} from 'graphql';

const TopDownloadType = new ObjectType({
  name: 'TopDownload',
  fields: {
    app_id: { type: StringType },
    developer_id: { type: StringType },
    title: { type: StringType },
    point: { type: FloatType },
    min_installs: { type: FloatType },
    max_installs: { type: FloatType },
  },
});

export default TopDownloadType;
