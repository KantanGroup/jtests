/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Kanjis from './Kanjis';
import Layout from '../../components/Layout';


export default {

  path: '/japanese/jlpt-kanji-n:level',

  async action({ params }) {
    const level = params.level;
    const kanjis = require(`../../data/kanjis_jlpt_${level}.json`);
    return {
      title: `JLTP Kanji ${level}`,
      description: 'More than 6000+ kanji in Japanese. Let\'s learn and master about kanji',
      component: <Layout type="kanji"><Kanjis kanjis={kanjis.sort((a, b) => a.code - b.code)} /></Layout>,
    };
  },

};
