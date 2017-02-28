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
import { capitalize } from '../../common';

/* eslint max-len: ["error", 1000]*/
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
        query: `{index(countryCode:"${countryCode}",category:"all"){topgrossing{index,appId,category,collection,countryCode,icon,title,score,price,developerId}topsellingFree{index,appId,category,collection,countryCode,icon,title,score,price,developerId}topsellingPaid{index,appId,category,collection,countryCode,icon,title,score,price,developerId}topsellingNewFree{index,appId,category,collection,countryCode,icon,title,score,price,developerId}topsellingNewPaid{index,appId,category,collection,countryCode,icon,title,score,price,developerId}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component;
    if (data.index) {
      component = (
        <Layout>
          <Top
            topgrossing={data.index.topgrossing}
            topsellingFree={data.index.topsellingFree}
            topsellingPaid={data.index.topsellingPaid}
            topsellingNewPaid={data.index.topsellingNewPaid}
            topsellingNewFree={data.index.topsellingNewFree}
            countryName={countryName}
            countryCode={countryCode}
          />
        </Layout>
      );
    } else {
      component = (
        <Layout>
          <Top
            countryName={countryName}
            countryCode={countryCode}
          />
        </Layout>
      );
    }
    return {
      title: `Top mobile app trends in ${capitalize(countryName.split('-').join(' '))}`,
      description: `Infographic highlighting the top mobile app trends in ${countryName.split('-').join(' ')}.`,
      component,
    };
  },

};
