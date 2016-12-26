/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Grammar from './Grammar';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import Maintenance from '../../components/Maintenance';

export default {

  path: '/japanese/grammar/:id',

  async action({ params }) {
    const id = params.id;
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{grammar(code:${id}){id,grammar,hiragana,definition,formated}}`,
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    let component = (
      <Maintenance />
    );
    if (data && data.grammar) {
      component = (
        <Grammar grammar={data.grammar} />
      );
    }
    return {
      title: 'Japanese Grammar Summary',
      description: 'This summary of some basic Japanese grammar has been derived from the Japanese grammar text books. Let\'s enjoy with these',
      component: <Layout type="grammar">{component}</Layout>,
    };
  },

};
