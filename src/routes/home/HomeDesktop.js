/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import s from './Home.css';
import Link from '../../components/Link';
import Breadcrumb from '../../components/Breadcrumb';
import Country from '../../components/Country';

const countries = require('../../data/countries.json');

class HomeDesktop extends React.Component {

  render() {
    const topCountries = [];
    countries.forEach((country) => {
      if (country.type === 9) {
        topCountries.push(country);
      }
    });
    topCountries.sort((a, b) => a.id - b.id);
    return (
      <div className={s.root}>
        <Breadcrumb>
          <Breadcrumb.Item active>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <center>
            <h2>Top mobile app trends in the world in 2017</h2>
            {topCountries.map(country => (
              <Country key={`country_id_${country.id}`} country={country} store={'googlestore'} />
            ))}
            <br />
            <Link to={'/top-mobile-app-trend-in-the-world'}>
              <Button bsStyle="primary"><Glyphicon glyph="search" /> View more countries</Button>
            </Link>
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeDesktop);
