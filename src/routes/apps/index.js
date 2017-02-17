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
import App from './App';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 1000]*/
export default {

  path: '/app-trend-in-:countryName/:appId/:countryCode',

  async action({ params }) {
    const countryName = params.countryName;
    const countryCode = params.countryCode;
    const appId = params.appId;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{app(appId:"${appId}",language:"${countryCode}"){appId,title,summary,description,descriptionHTML,developerId,video,price}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    return {
      title: `${data.app.title} app trends in ${capitalize(countryName.split('-').join(' '))}`,
      description: `${appId} app trends in ${countryName.split('-').join(' ')}. ${data.app.summary}`,
      component:
  <Layout>
    <App
      app={data.app}
      countryName={countryName}
      countryCode={countryCode}
    />
  </Layout>,
    };
  },

};
