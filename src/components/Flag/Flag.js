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
import s from './Flag.css';

class Flag extends React.Component {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  render() {
    const { countryCode, countryName, size } = this.props;
    const flag = require(`./flags/${countryCode}.svg`); // eslint-disable-line
    return (
      <div className={s.flag}>
        <div className={s.country}>{countryName}</div>
        <img src={flag} width={4 * size} height={3 * size} alt={`Top mobile app trends in ${countryName}`} />
      </div>
    );
  }
}

export default withStyles(s)(Flag);
