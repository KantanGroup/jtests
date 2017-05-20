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
import { Image } from 'react-bootstrap';
import Rater from 'react-rater';
import s from './AppSummaryColumn.css';
import Link from '../../components/Link';
import { imageServer } from '../../config';
import { capitalize } from '../../common';

class AppSummaryColumn extends React.Component {
  static propTypes = {
    countryName: PropTypes.string.isRequired,
    app: PropTypes.shape(PropTypes.object).isRequired,
  };

  render() {
    const { app, countryName } = this.props;
    return (
      <div>
        <Link
          title={`${app.title} app trends in ${capitalize(countryName.split('-').join(' '))}`}
          key={`app_id_${app.index}`}
          to={`/app-trend-in-${countryName}/app/${app.appId}`}
        >
          <div className={s.app}>
            <div className={s.appImage}>
              <Image src={app.icon} rounded width={85} height={85} alt={`Trends app ${app.appId}`} />
            </div>
            <div className={s.appDescription}>
              <div className={s.appName}>{app.title}</div>
              <div className={s.appDeveloper}>{app.developerId}</div>
              <Rater interactive={false} rating={app.point} />
              <div className={s.appPrice}>{app.price === '0' ? 'Free' : app.price}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(AppSummaryColumn);
