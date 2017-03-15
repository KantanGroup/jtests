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
import { capitalize, getLanguageCode, getCountryCode } from '../../common';
import { imageServer, homeServer } from '../../config';

/* eslint max-len: ["error", 1000]*/
export default {

  path: '/app-trend-in-:countryName/app/:appId',

  async action({ params }) {
    const countryName = params.countryName;
    // const countryCode = params.countryCode;
    const appId = params.appId;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{app(appId:"${appId}",language:"${getLanguageCode(countryName)}"){app{appId,title,summary,descriptionHTML,developerId,developerEmail,developerWebsite,genre,version,playstoreUrl,video,point,price,minInstalls,maxInstalls,androidVersion,updated},similar{apps{appId,title,developer{devId},icon,score,price}}},trend(appId:"${appId}",countryCode:"${getCountryCode(countryName)}",category:"all"){topgrossing{index,createAt}topsellingFree{index,createAt}topsellingPaid{index,createAt}topsellingNewFree{index,createAt}topsellingNewPaid{index,createAt}}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (data.app.app) {
      const app = data.app.app;
      return {
        canonicalUrl: `${homeServer}/app-trend-in-${countryName}/app/${appId}`,
        imageUrl: `${imageServer}/icon/${appId}.png`,
        title: `${app.title} app trends in ${capitalize(countryName.split('-').join(' '))}`,
        description: `${app.summary}`,
        component: <Layout countryCode={getCountryCode(countryName)}><App app={app} trend={data.trend} similar={data.app.similar} appId={appId} countryCode={getCountryCode(countryName)} countryName={countryName} /></Layout>,
      };
    }
    return {
      title: `${appId} app trends in ${capitalize(countryName.split('-').join(' '))}`,
      description: `${appId} app trends in ${countryName.split('-').join(' ')}`,
      component: <Layout countryCode={getCountryCode(countryName)}><App appId={appId} countryCode={getCountryCode(countryName)} countryName={countryName} /></Layout>,
    };
  },

};
