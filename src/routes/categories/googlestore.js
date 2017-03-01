/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Category from './Category';
import { capitalize } from '../../common';

/* eslint max-len: ["error", 1000]*/
export default {

  path: '/app-trend-in-:countryName/googlestore/:categoryParent-category',

  async action({ params }) {
    const countryName = params.countryName;
    const categoryParent = params.categoryParent;
    if (categoryParent === 'app') {
      const categories = require('./apps.json'); // eslint-disable-line
      return {
        title: `App trend in category in ${capitalize(countryName.split('-').join(' '))}`,
        description: `App trend in category in ${countryName.split('-').join(' ')}`,
        component: <Layout><Category countryName={countryName} categories={categories} /></Layout>,
      };
    }
    const categories = require('./games.json'); // eslint-disable-line
    return {
      title: `Game trend in category in ${capitalize(countryName.split('-').join(' '))}`,
      description: `Game trend in category in ${countryName.split('-').join(' ')}`,
      component: <Layout><Category countryName={countryName} categories={categories} /></Layout>,
    };
  },
};
