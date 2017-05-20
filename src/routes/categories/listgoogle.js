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
import ListCategory from './ListCategory';
import { capitalize, getCountryCode } from '../../common';

/* eslint max-len: ["error", 1000]*/
export default {

  path: '/app-trend-in-:countryName/googlestore/list-app/:categoryName-category/:collectionName',

  async action({ params }) {
    const countryName = params.countryName;
    // const countryCode = params.countryCode;
    const categoryName = params.categoryName;
    const collectionName = params.collectionName;

    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{list(countryCode:"${getCountryCode(countryName)}",category:"${categoryName.split('-').join('_')}",collection:"${collectionName.split('-').join('_')}"){topapps{index,appId,icon,category,collection,countryCode,title,point,price,developerId}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component;
    if (data.list) {
      component = (
        <Layout countryCode={getCountryCode(countryName)}>
          <ListCategory
            topapps={data.list.topapps}
            collection={collectionName}
            countryName={countryName}
            countryCode={getCountryCode(countryName)}
            categoryName={categoryName}
          />
        </Layout>
      );
    } else {
      component = (
        <Layout countryCode={getCountryCode(countryName)}>
          <ListCategory
            countryName={countryName}
            countryCode={getCountryCode(countryName)}
            categoryName={categoryName}
          />
        </Layout>
      );
    }
    return {
      title: `App trends in ${capitalize(categoryName.split('-').join(' '))} in ${capitalize(countryName.split('-').join(' '))}`,
      description: `Infographic highlighting the top mobile app trends in ${capitalize(categoryName.split('-').join(' '))} in ${countryName.split('-').join(' ')}.`,
      component,
    };
  },

};
