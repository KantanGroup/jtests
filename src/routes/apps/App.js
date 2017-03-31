/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import AppMobile from './AppMobile';
import AppDesktop from './AppDesktop';

/* eslint max-len: ["error", 200]*/
class App extends React.Component {
  render() {
    let layout = (
      <AppMobile {...this.props} />
    );
    if (this.props.device.type !== 'phone') {
      layout = (
        <AppDesktop {...this.props} />
      );
    }
    return (
      <div>
        {layout}
      </div>
    );
  }
}

App.propTypes = {
  device: React.PropTypes.object.isRequired, //eslint-disable-line
};

function mapStateToProps(state) {
  return {
    device: state.device.device,
  };
}

export default connect(mapStateToProps)(App);
