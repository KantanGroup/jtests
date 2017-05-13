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
} from 'graphql';

import PureapkAssetType from './PureapkAssetType';

const PureapkType = new ObjectType({
  name: 'Pureapk',
  fields: {
    title: { type: StringType },
    version_name: { type: StringType },
    package_name: { type: StringType },
    review_stars: { type: StringType },
    review_count: { type: StringType },
    download_count: { type: StringType },
    version_name: { type: StringType },
    asset: { type: PureapkAssetType },
  },
});

export default PureapkType;
