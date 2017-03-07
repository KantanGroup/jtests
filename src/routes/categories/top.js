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
import TopCategory from './TopCategory';
import { capitalize, getCountryCode } from '../../common';

/* eslint max-len: ["error", 1000]*/
export default {

  path: '/app-trend-in-:countryName/googlestore/top-app/:categoryName-category',

  async action({ params }) {
    const countryName = params.countryName;
    // const countryCode = params.countryCode;
    const categoryName = params.categoryName;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{index(countryCode:"${getCountryCode(countryName)}",category:"${categoryName.split('-').join('_')}"){topgrossing{index,appId,category,collection,countryCode,title,point,price,developerId}topsellingFree{index,appId,category,collection,countryCode,title,point,price,developerId}topsellingPaid{index,appId,category,collection,countryCode,title,point,price,developerId}topsellingNewFree{index,appId,category,collection,countryCode,title,point,price,developerId}topsellingNewPaid{index,appId,category,collection,countryCode,title,point,price,developerId}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component;
    if (data.index) {
      component = (
        <Layout countryCode={getCountryCode(countryName)}>
          <TopCategory
            topgrossing={data.index.topgrossing}
            topsellingFree={data.index.topsellingFree}
            topsellingPaid={data.index.topsellingPaid}
            topsellingNewPaid={data.index.topsellingNewPaid}
            topsellingNewFree={data.index.topsellingNewFree}
            countryName={countryName}
            countryCode={getCountryCode(countryName)}
            categoryName={categoryName}
          />
        </Layout>
      );
    } else {
      component = (
        <Layout countryCode={getCountryCode(countryName)}>
          <TopCategory
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
