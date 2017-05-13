/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Download.css';

class Download extends React.Component {
  static propTypes = {
    app: PropTypes.object, //eslint-disable-line
  }

  render() {
    const { app } = this.props;
    return (
      <div className={s.root}>
        <div className={s.anchor}>
          <h2>download {app.name.toLowerCase()} app</h2>
          <h2>download {app.name.toLowerCase()} app free</h2>
          <h2>download {app.name.toLowerCase()} app for android</h2>
          <h2>download {app.name.toLowerCase()} app for android free</h2>
          <h2>download {app.name.toLowerCase()} application</h2>
          <h2>download {app.name.toLowerCase()} application free</h2>
          <h2>download {app.name.toLowerCase()} apk</h2>
          <h2>download {app.name.toLowerCase()} apk free</h2>
          <h2>download {app.name.toLowerCase()} apk 2017</h2>
          <h2>download {app.name.toLowerCase()} apk free 2017</h2>
          <h2>download {app.name.toLowerCase()} android apk</h2>
          <h2>download {app.name.toLowerCase()} android apk free</h2>
          <h2>download {app.name.toLowerCase()} android apk 2017</h2>
          <h2>download {app.name.toLowerCase()} android apk free 2017</h2>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Download);
