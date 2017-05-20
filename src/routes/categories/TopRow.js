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
import { Image, Button } from 'react-bootstrap';
import Rater from 'react-rater';
import s from './TopRow.css';
import Link from '../../components/Link';
import { imageServer } from '../../config';
import { capitalize } from '../../common';

class TopRow extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
    categoryName: PropTypes.string.isRequired,
    collection: PropTypes.string.isRequired,
  };

  render() {
    const { apps, countryName, title, categoryName, collection } = this.props;
    return (
      <div>
        <center><h3>{title}</h3></center>
        {apps.map(app => (
          <Link
            title={`${app.title} app trends in ${capitalize(countryName.split('-').join(' '))}`}
            key={`app_id_${app.index}`}
            to={`/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/app/${app.appId}/${categoryName}-category`}
          >
            <div className={s.app}>
              <div className={s.appImage}>
                <Image src={`${app.icon}`} rounded width={85} height={85} alt={`App trends ${app.title}`} />
              </div>
              <div className={s.appDescription}>
                <div className={s.appName}>{app.title}</div>
                <div className={s.appDeveloper}>{app.developerId}</div>
                <Rater interactive={false} rating={app.point} />
                <div className={s.appPrice}>{app.price === '0' ? 'Free' : app.price}</div>
              </div>
            </div>
          </Link>
        ))}
        <center>
          <Link
            title={`Top app trends in ${collection.split('_').join(' ')} in ${capitalize(countryName.split('-').join(' '))}`}
            to={`/app-trend-in-${countryName}/googlestore/list-app/${categoryName}-category/${collection.split('_').join('-')}`}
          >
            <Button bsStyle="danger">See more</Button>
          </Link>
        </center>
      </div>
    );
  }
}

export default withStyles(s)(TopRow);
