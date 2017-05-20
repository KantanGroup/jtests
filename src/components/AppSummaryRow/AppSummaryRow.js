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
import { Image, Grid, Row, Col } from 'react-bootstrap';
import Rater from 'react-rater';
import s from './AppSummaryRow.css';
import { imageServer } from '../../config';

class AppSummaryRow extends React.Component {
  static propTypes = {
    app: PropTypes.shape(PropTypes.object).isRequired,
  };

  render() {
    const { app } = this.props;
    return (
      <div className={s.app}>
        <Grid>
          <Row className="show-grid">
            <Col md={2}>
              <div className={s.appImage}>
                <Image src={app.icon} rounded width={125} height={125} alt={`App trends ${app.title}`} />
              </div>
            </Col>
            <Col md={5}>
              <div className={s.appDescription}>
                <div className={s.appName}>{app.title}</div>
                <div className={s.appDeveloper}>{app.genre}</div>
                <div className={s.appDeveloper}>{app.minInstalls}{app.maxInstalls ? `-${app.maxInstalls}` : ''} downloaded</div>
                <Rater interactive={false} rating={app.point} />
                <div className={s.appPrice}>{app.price === '0' ? 'Free' : app.price}</div>
                <div className={s.appDeveloper}>{app.version}</div>
              </div>
            </Col>
            <Col md={5}>
              <div className={s.appInformation}>
                <div className={s.appName}>{app.developerId}</div>
                <div className={s.appDeveloper}>{app.developerEmail}</div>
                <div className={s.appDeveloper}>{app.developerWebsite}</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(AppSummaryRow);
