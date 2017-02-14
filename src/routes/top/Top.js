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
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Rater from 'react-rater';
import s from './Top.css';
import Link from '../../components/Link';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 200]*/
class Top extends React.Component {
  static propTypes = {
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { apps } = this.props;
    const { countryName } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h2>Infographic highlighting the top mobile app trends in {capitalize(countryName.split('-').join(' '))}</h2>
          </center>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                {apps.map(app => (
                  <Link key={`app_id_${app.index}`} to={`/top-mobile-app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/${app.appId}`}>
                    <div className={s.app}>
                      <div className={s.appImage}>
                        <Image src={`${app.icon.startsWith('http') ? app.icon : `http:${app.icon}`}`} rounded width={85} height={85} alt={`Trend app ${app.appId}`} />
                      </div>
                      <div className={s.appDescription}>
                        <div className={s.appName}>{app.title}</div>
                        <div className={s.appDeveloper}>{app.developerId}</div>
                        <Rater interactive={false} rating={app.score} />
                        <div className={s.appPrice}>{app.price === '0' ? 'Free' : app.price}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
              <Col xsHidden md={4}>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
              </Col>
            </Row>
          </Grid>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Top);
