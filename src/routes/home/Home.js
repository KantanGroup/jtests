/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

/* eslint max-len: ["error", 200]*/
class Home extends React.Component {

  render() {
    let layout = (
      <HomeMobile />
    );
    if (this.props.device.type !== 'phone') {
      layout = (
        <HomeDesktop />
      );
    }
    return (
      <div>
        {layout}
      </div>
    );
  }
}

Home.propTypes = {
  device: React.PropTypes.object.isRequired, //eslint-disable-line
};

function mapStateToProps(state) {
  return {
    device: state.device.device,
  };
}

export default connect(mapStateToProps)(Home);
