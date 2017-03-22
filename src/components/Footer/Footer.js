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
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Zuzuapps</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Download apps free</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="http://topapptrends.com/top-mobile-app-trend-in-the-world">App trends in countries</Link>
        </div>
        <div className={s.anchor}>
          <h2>download app trends in 2017</h2>
          <h2>download android apk</h2>
          <h2>download android apk free</h2>
          <h2>download android 2017</h2>
          <h2>download android free 2017</h2>
          <h2>download apps for android</h2>
          <h2>download apps for android free</h2>
          <h2>download apps for ipad</h2>
          <h2>download apps for iphone</h2>
          <h2>download apps for android 2017</h2>
          <h2>download apps for android free 2017</h2>
          <h2>download apps for ipad 2017</h2>
          <h2>download apps for iphone 2017</h2>
          <h2>download apps 2017</h2>
          <h2>download apps free</h2>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
