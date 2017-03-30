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
import Top from './Top';
import { capitalize, getCountryCode } from '../../common';
import top from './top.graphql';

/* eslint max-len: ["error", 1000]*/
export default {

  path: '/top-mobile-app-trend-in-:countryName/googlestore/top-app',

  async action({ params, client }) {
    const countryName = params.countryName;
    const countryCode = getCountryCode(countryName);
    const { data } = await client.networkInterface.query({
      query: top,
      variables: { countryCode },
    });
    let component;
    if (data.index) {
      component = (
        <Layout countryCode={countryCode}>
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
        <Layout countryCode={countryCode}>
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
