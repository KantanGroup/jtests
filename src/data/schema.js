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
import content from './queries/content';
import news from './queries/news';
import intl from './queries/intl';
import kanjimatome from './queries/kanjimatome';
import kanjis from './queries/kanjis';
import kanjiall from './queries/kanjiall';
import grammars from './queries/grammars';
import grammar from './queries/grammar';
import grammarall from './queries/grammarall';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      intl,
      content,
      kanjis,
      kanjimatome,
      kanjiall,
      grammar,
      grammars,
      grammarall,
    },
  }),
});

export default schema;
