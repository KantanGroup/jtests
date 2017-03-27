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
import List from './List';
import { capitalize, getCountryCode } from '../../common';

/* eslint max-len: ["error", 1000]*/
export default {

  path: '/top-mobile-app-trend-in-:countryName/googlestore/list-app/:collectionName',

  async action({ params }) {
    const countryName = params.countryName;
    // const countryCode = params.countryCode;
    const collectionName = params.collectionName;

    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{list(countryCode:"${getCountryCode(countryName)}",category:"all",collection:"${collectionName.split('-').join('_')}"){topapps{index,appId,category,collection,countryCode,title,point,price,developerId}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component;
    if (data.list) {
      component = (
        <Layout countryCode={getCountryCode(countryName)}>
          <List
            topapps={data.list.topapps}
            collection={collectionName}
            countryName={countryName}
            countryCode={getCountryCode(countryName)}
          />
        </Layout>
      );
    } else {
      component = (
        <Layout countryCode={getCountryCode(countryName)}>
          <List
            collection={collectionName}
            countryName={countryName}
            countryCode={getCountryCode(countryName)}
          />
        </Layout>
      );
    }
    return {
      title: `Top mobile app trends in ${collectionName.split('-').join(' ')} in ${capitalize(countryName.split('-').join(' '))}`,
      description: `Infographic highlighting the top mobile app trends in ${collectionName.split('-').join(' ')} in ${countryName.split('-').join(' ')}.`,
      component,
    };
  },

};
