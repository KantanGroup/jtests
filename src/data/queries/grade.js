/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import KanjisType from '../types/KanjisType';

const grade = {
  type: KanjisType,
  args: {
    level: { type: new NonNull(IntType) },
  },
  async resolve({ request }, { level }, { loaders }) {
    return loaders.kanji.loadJoyoGrade(level);
  },
};

export default grade;
