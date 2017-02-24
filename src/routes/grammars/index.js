/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Grammars from './Grammars';
import Layout from '../../components/Layout';

const grammars = require('../../data/grammars.json');

export default {

  path: '/japanese/grammars',

  async action() {
    return {
      title: 'Japanese Grammar Summary - 日本語文型辞典',
      description: 'This summary of some basic Japanese grammar has been derived from the Japanese grammar text books. Let\'s enjoy with these',
      component: <Layout type="grammar"><Grammars grammars={grammars} /></Layout>,
    };
  },

};
