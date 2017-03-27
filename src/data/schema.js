/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import intl from './queries/intl';
import index from './queries/index';
import list from './queries/list';
import app from './queries/app';
import trend from './queries/trend';
import top from './queries/top';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      intl,
      index,
      list,
      app,
      trend,
      top,
      category: trend,
    },
  }),
});

export default schema;
