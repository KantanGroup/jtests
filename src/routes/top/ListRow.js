/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import AppTopRow from '../../components/AppTopRow';

class ListRow extends React.Component {
  static propTypes = {
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { apps, countryName } = this.props;
    return (
      <div>
        {apps.map(app => (
          <AppTopRow app={app} countryName={countryName} />
        ))}
      </div>
    );
  }
}

export default ListRow;
