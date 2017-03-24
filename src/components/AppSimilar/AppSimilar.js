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
import s from './AppSimilar.css';
import { downloadServer } from '../../config';

/* eslint max-len: ["error", 200]*/
class AppSimilar extends React.Component {
  static propTypes = {
    countryName: PropTypes.string.isRequired,
    similarApp: PropTypes.shape(PropTypes.object).isRequired,
  };

  static defaultProps = {
    similarApp: null,
  }

  render() {
    const { similarApp, countryName } = this.props;
    return (
      <div className={s.app}>
        <div className={s.appDescription}>
          <a
            title={`Download ${similarApp.title} apk`}
            rel="follow, index"
            // eslint-disable-next-line
            href={`${downloadServer}/download/${similarApp.title.replace(/[&\\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase().split(' ').join('-')}/apk/${similarApp.appId}/in-${countryName.toLowerCase().split(' ').join('-')}`}>
            <Image src={`${similarApp.icon}`} rounded width={184} height={184} alt={`Download ${similarApp.title} apk`} />
          </a>
          <div className={s.appName}>{similarApp.title}</div>
          <div className={s.appDeveloper}>{similarApp.developer.devId}</div>
          <Rater interactive={false} rating={similarApp.score} />
          <div className={s.appPrice}>{similarApp.price === '0' ? 'Free' : similarApp.price}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AppSimilar);
