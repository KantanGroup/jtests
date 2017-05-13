/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Download from './Download';
import Layout from '../../components/Layout';
import Maintenance from '../../components/Maintenance';
import fetch from '../../core/fetch';

export default {

  path: '/download/apk/:appId/latest',

  async action({ params }) {
    const appId = params.appId;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{download(id: "${appId}"){result{title,version_name,package_name,asset{url,size}}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    console.log(data); // eslint-disable-line
    if (data && data.result) {
      const app = data.result[0];
      return {
        title: `Download ${appId} apk latest`,
        description: `Download ${appId} apk latest`,
        component: <Layout><Download app={app} /></Layout>,
      };
    }
    return {
      title: 'Download Android apps, Download IPhone apps',
      component: <Layout><Maintenance /></Layout>,
    };
  },

};
