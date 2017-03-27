/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Countries.css';
import Breadcrumb from '../../components/Breadcrumb';
import Country from '../../components/Country';

const countries = require('../../data/countries.json');

/* eslint max-len: ["error", 200]*/
class Countries extends React.Component {

  render() {
    const enableCountries = [];
    countries.forEach((country) => {
      if (country.type !== 0) {
        enableCountries.push(country);
      }
    });
    return (
      <div className={s.root}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            All countries in the world
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <center>
            <h2>Top mobile app trends in the world in 2017</h2>
            {enableCountries.map(country => (
              <Country country={country} store={'googlestore'} />
            ))}
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Countries);
