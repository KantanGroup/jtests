/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import AppSummaryColumn from '../../components/AppSummaryColumn';
import Link from '../../components/Link';
import { capitalize } from '../../common';

class TopColumn extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
    collection: PropTypes.string.isRequired,
  };

  render() {
    const { apps, countryName, title, collection } = this.props;
    return (
      <div>
        <center><h3>{title}</h3></center>
        {apps.map(app => (
          <AppSummaryColumn app={app} countryName={countryName} />
        ))}
        <center>
          <Link
            title={`Top app trends in ${collection.split('_').join(' ')} in ${capitalize(countryName.split('-').join(' '))}`}
            to={`/top-mobile-app-trend-in-${countryName}/googlestore/list-app/${collection.split('_').join('-')}`}
          >
            <Button bsStyle="danger">See more</Button>
          </Link>
        </center>
      </div>
    );
  }
}

export default TopColumn;
