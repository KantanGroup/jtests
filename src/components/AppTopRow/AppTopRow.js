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
import { Image, Col } from 'react-bootstrap';
import Rater from 'react-rater';
import s from './AppTopRow.css';
import Link from '../../components/Link';
import { imageServer } from '../../config';
import { capitalize } from '../../common';

/* eslint max-len: ["error", 200]*/
class AppTopRow extends React.Component {
  static propTypes = {
    categoryName: PropTypes.string,
    countryName: PropTypes.string.isRequired,
    app: PropTypes.shape(PropTypes.object).isRequired,
    iWidth: PropTypes.number,
    iHeight: PropTypes.number,
  };

  static defaultProps = {
    categoryName: null,
    app: null,
    iWidth: 184,
    iHeight: 184,
  }

  render() {
    const { app, countryName, categoryName, iWidth, iHeight } = this.props;
    let link;
    if (categoryName) {
      link = `/app-trend-in-${countryName}/app/${app.appId}/${categoryName}-category`;
    } else {
      link = `/app-trend-in-${countryName}/app/${app.appId}`;
    }
    return (
      <Col md={2}>
        <div className={s.app}>
          <div className={s.appDescription}>
            <Link
              title={`${app.title} app trends in ${capitalize(countryName.split('-').join(' '))}`}
              key={`app_id_${app.index}`}
              to={link}
            >
              <Image src={app.icon} rounded width={iWidth} height={iHeight} alt={`Trends app ${app.appId}`} />
            </Link>
            <div className={s.appName}>{app.title}</div>
            <div className={s.appDeveloper}>{app.developerId}</div>
            <Rater interactive={false} rating={app.point} />
            <div className={s.appPrice}>{app.price === '0' ? 'Free' : app.price}</div>
          </div>
        </div>
      </Col>
    );
  }
}

export default withStyles(s)(AppTopRow);
