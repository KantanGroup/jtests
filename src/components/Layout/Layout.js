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
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    countryCode: PropTypes.String,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { countryCode } = this.props;
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer countryCode={countryCode}/>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
