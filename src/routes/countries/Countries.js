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
import Flag from '../../components/Flag';
import Link from '../../components/Link';

const countries = require('./countries.json');

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
        <div className={s.container}>
          <center>
            <h2>Top mobile app trends in the world in 2017</h2>
            {enableCountries.map((country) => (
              <Link key={`country_id_${country.id}`} to={`/top-mobile-app-trend-in-${country.countryName.toLowerCase().split(' ').join('-')}/${country.countryCode}`}>
                <Flag countryCode={country.countryCode} countryName={country.countryName} size={30} />
              </Link>
            ))}
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Countries);
