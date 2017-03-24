/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import s from './NotFound.css';
import Flag from '../../components/Flag';
import Link from '../../components/Link';
import Breadcrumb from '../../components/Breadcrumb';

const countries = require('../../data/countries.json');

/* eslint max-len: ["error", 200]*/
class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

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
          <Breadcrumb.Item href="http://zuzuapps.com">
            Download apps free
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/">
            Top apps trends in 2017
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Page not found
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
        <Breadcrumb>
          <Breadcrumb.Item active>
            Recommended for you
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <center>
            <h2>Top mobile app trends in the world in 2017</h2>
            {topCountries.map(country => (
              <Link
                title={`App trends in ${country.countryName}`}
                key={`country_id_${country.id}`}
                to={`/top-mobile-app-trend-in-${country.countryName.toLowerCase().split(' ').join('-')}/${country.countryCode}`}
              >
                <Flag countryCode={country.countryCode} countryName={country.countryName} size={30} />
              </Link>
            ))}
            <br />
            <Link to={'/top-mobile-app-trend-in-the-world'}>
              <Button bsStyle="primary"><Glyphicon glyph="search" /> View more countries</Button>
            </Link>
          </center>
        </div>
        <Breadcrumb>
          <Breadcrumb.Item href="http://zuzuapps.com">
            Download apps free
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/">
            Top apps trends in 2017
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Page not found
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default withStyles(s)(NotFound);
