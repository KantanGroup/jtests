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
import AppSimilarDesktop from './AppSimilarDesktop';
import AppSimilarMobile from './AppSimilarMobile';

class AppSimilar extends React.Component {
  render() {
    let layout = (
      <AppSimilarMobile {...this.props} />
    );
    if (this.props.device.type !== 'phone') {
      layout = (
        <AppSimilarDesktop {...this.props} />
      );
    }
    return (
      <div>
        {layout}
      </div>
    );
  }
}

AppSimilar.propTypes = {
  device: React.PropTypes.object.isRequired, //eslint-disable-line
};

function mapStateToProps(state) {
  return {
    device: state.device.device,
  };
}

export default connect(mapStateToProps)(AppSimilar);
