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
import { Grid, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitter, FaGooglePlus } from 'react-icons/lib/fa';
import s from './Footer.css';
import Link from '../Link';
import { capitalize, getCountryName } from '../../common';

class Footer extends React.Component {
  render() {
    const { countryCode } = this.props;
    const menuTrend = [];
    let menuGame;
    let menuApp;
    let wordApp;
    if (countryCode) {
      const countryName = getCountryName(countryCode);
      const apps = require('../../routes/categories/apps.json'); // eslint-disable-line
      const games = require('../../routes/categories/games.json'); // eslint-disable-line
      menuTrend.push(
        <div className={s.footer}>- <Link className={s.link} to={`/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/googlestore/app-category`}>App trend in {capitalize(countryName)}</Link></div>,
      );
      menuTrend.push(
        <div className={s.footer}>- <Link className={s.link} to={`/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/googlestore/game-category`}>Game trend in {capitalize(countryName)}</Link></div>,
      );
      menuGame = (
        <Col md={3}>
          <div className={s.footer}>
            <span className={s.text}>Game trend in {capitalize(countryName)}</span>
          </div>
          {games.map((category, index) => (
            // eslint-disable-next-line
            <div className={s.footer}>- <Link key={`link_game_${index}`} className={s.link} to={`/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/googlestore/top-app/${category.split('_').join('-')}-category`}>{capitalize(category.split('_').join(' '))}</Link></div>
          ))}
        </Col>
      );
      menuApp = (
        <Col md={3}>
          <div className={s.footer}>
            <span className={s.text}>App trend in {capitalize(countryName)}</span>
          </div>
          {apps.map((category, index) => (
            // eslint-disable-next-line
            <div className={s.footer}>- <Link key={`link_app_${index}`} className={s.link} to={`/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/googlestore/top-app/${category.split('_').join('-')}-category`}>{capitalize(category.split('_').join(' '))}</Link></div>
          ))}
        </Col>
      );
      wordApp = (
        <div>
          <h2>app trends in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top app trends in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top app trends in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top app trends {capitalize(countryName).toLowerCase()}</h2>
          <h2>top trends in {capitalize(countryName).toLowerCase()}</h2>
          <h2>app trends in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps for android in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps for ipad in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps for iphone in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps 2017 in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps download in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps download free in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps download for android in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps download for ipad in {capitalize(countryName).toLowerCase()}</h2>
          <h2>top apps download for iphone in {capitalize(countryName).toLowerCase()}</h2>
        </div>
      );
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Grid>
            <Row className="show-grid">
              <Col md={3}>
                <div className={s.footer}>
                  <span className={s.text}>© Zuzuapps</span>
                </div>
                <div className={s.footer}>- <Link className={s.link} to="/">Home</Link></div>
                <div className={s.footer}>- <Link className={s.link} to="/privacy">Privacy</Link></div>
                <div className={s.footer}>- <Link className={s.link} to="/about">About</Link></div>
                <div className={s.footer}>
                  Flow Us
                  <a className={s.social} href="https://www.facebook.com/topapptrends"><FaFacebookSquare size={18} /></a>
                  <a className={s.social} href="https://twitter.com/topapptrends"><FaTwitter size={18} /></a>
                  <a className={s.social} href="https://plus.google.com/u/0/103598052624958897362"><FaGooglePlus size={18} /></a>
                </div>
              </Col>
              <Col md={3}>
                <div className={s.footer}><span className={s.text}>Mobile app trends</span></div>
                <div className={s.footer}>- <Link className={s.link} to="/top-mobile-app-trend-in-the-world">All countries</Link></div>
                {menuTrend}
              </Col>
              {menuGame}
              {menuApp}
            </Row>
          </Grid>
          <div className={s.anchor}>
            <h2>app trends in 2017</h2>
            <h2>top app trends in 2017</h2>
            <h2>top app trends in 2017</h2>
            <h2>top app trends</h2>
            <h2>top trends in 2017</h2>
            <h2>app trends in 2017</h2>
            <h2>app trends android 2017</h2>
            <h2>top app trends android 2017</h2>
            <h2>top app trends android 2017</h2>
            <h2>top app trends android</h2>
            <h2>top trends android 2017</h2>
            <h2>app trends android 2017</h2>
            <h2>top apps for android</h2>
            <h2>top apps for ipad</h2>
            <h2>top apps for iphone</h2>
            <h2>top apps for android 2017</h2>
            <h2>top apps for ipad 2017</h2>
            <h2>top apps for iphone 2017</h2>
            <h2>top apps 2017</h2>
            <h2>top apps download</h2>
            <h2>top apps download free</h2>
            <h2>top apps download for android</h2>
            <h2>top apps download for ipad</h2>
            <h2>top apps download for iphone</h2>
            {wordApp}
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  countryCode: PropTypes.string,
};

Footer.defaultProps = {
  countryCode: null,
};

export default withStyles(s)(Footer);
