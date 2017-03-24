/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import AppSummaryColumn from '../../components/AppSummaryColumn';

class TopColumn extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { apps, countryName, title } = this.props;
    return (
      <div>
        <center><h3>{title}</h3></center>
        {apps.map(app => (
          <AppSummaryColumn app={app} countryName={countryName} />
        ))}
      </div>
    );
  }
}

export default TopColumn;
