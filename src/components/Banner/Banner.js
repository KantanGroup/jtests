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
import s from './Banner.css';

class AppSummaryRow extends React.Component {
  static propTypes = {
    app: PropTypes.shape(PropTypes.object).isRequired,
  };

  render() {
    return (
      <center><img className={s.ads} src={'/ads.jpeg'} alt="Download app" /></center>
    );
  }
}

export default withStyles(s)(AppSummaryRow);
