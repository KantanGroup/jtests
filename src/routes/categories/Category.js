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
import s from './Category.css';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 200]*/
class Category extends React.Component {
  static propTypes = {
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
  };

  render() {
    const { countryName } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h2>Infographic highlighting the top mobile app trends in {capitalize(countryName.split('-').join(' '))}</h2>
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Category);
