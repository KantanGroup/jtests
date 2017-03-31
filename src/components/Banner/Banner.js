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
import s from './Banner.css';

class Banner extends React.Component {
  render() {
    let layout = (
      <center><img className={s.ads} src={'/ads_300x250.jpg'} alt="Download app" /></center>
    );
    if (this.props.device.type !== 'phone') {
      layout = (
        <center><img className={s.ads} src={'/ads.jpeg'} alt="Download app" /></center>
      );
    }
    return (
      <div>
        {layout}
      </div>
    );
  }
}

Banner.propTypes = {
  device: React.PropTypes.object.isRequired, //eslint-disable-line
};

function mapStateToProps(state) {
  return {
    device: state.device.device,
  };
}

export default connect(mapStateToProps)(Banner);
