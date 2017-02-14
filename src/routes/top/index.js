/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import Top from './Top';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 250]*/
export default {

  path: '/top-mobile-app-trend-in-:countryName/:countryCode',

  async action({ params }) {
    const countryName = params.countryName;
    const countryCode = params.countryCode;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{index(countryCode:"${countryCode}",category:"books_and_reference",collection:"topgrossing"){apps{index,appId,category,collection,countryCode,icon,title,score,price,developerId}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    return {
      title: `Top mobile app trends in ${capitalize(countryName.split('-').join(' '))}`,
      description: `Infographic highlighting the top mobile app trends in ${countryName.split('-').join(' ')}.`,
      component: <Layout><Top apps={data.index.apps.slice(0, 30)} countryName={countryName} countryCode={countryCode} /></Layout>,
    };
  },

};
