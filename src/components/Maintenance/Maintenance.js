/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';

class Maintenance extends Component {
  render() {
    return (
      <center><FlatButton label="Server under maintaince." secondary /></center>
    );
  }
}

export default Maintenance;
