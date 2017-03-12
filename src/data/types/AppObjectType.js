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
} from 'graphql';

import AppInformationType from './AppInformationType';
import AppSimilarTypes from './AppSimilarTypes';
import AppDeveloperTypes from './AppDeveloperTypes';

const AppObjectType = new ObjectType({
  name: 'AppObject',
  fields: {
    similar: { type: AppSimilarTypes },
    developer: { type: AppDeveloperTypes },
    app: { type: AppInformationType },
  },
});

export default AppObjectType;
