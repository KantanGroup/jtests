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
import { Grid, Row, Col } from 'react-bootstrap';
import s from './AppDesktop.css';
import { capitalize } from '../../common';
import Breadcrumb from '../../components/Breadcrumb';
import AppChart from '../../components/AppChart';
import AppSimilar from '../../components/AppSimilar';
import AppSummaryRow from '../../components/AppSummaryRow';
import Banner from '../../components/Banner';

/* eslint max-len: ["error", 200]*/
class AppDesktop extends React.Component {
  static propTypes = {
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    app: PropTypes.shape(PropTypes.object),
    similar: PropTypes.arrayOf(PropTypes.object),
    trend: PropTypes.shape(PropTypes.object),
    category: PropTypes.shape(PropTypes.object),
    categoryName: PropTypes.string,
  };

  static defaultProps = {
    app: null,
    similar: [],
    trend: null,
    category: null,
    categoryName: 'all',
  }

  render() {
    const { app, similar, trend, countryName, category, categoryName } = this.props;
    let menuBreadcrumb;
    if (categoryName !== 'all') {
      menuBreadcrumb = (
        <Breadcrumb.Item active>
          In {capitalize(categoryName.split('-').join(' '))}
        </Breadcrumb.Item>
      );
    }
    const breadCrumbMenu = (
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`/top-mobile-app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/googlestore/top-app`}>
          App trends in {capitalize(countryName.split('-').join(' '))}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {app.title}
        </Breadcrumb.Item>
        {menuBreadcrumb}
      </Breadcrumb>
    );
    const apps = similar.apps.slice(0, 12);
    if (app) {
      return (
        <div className={s.root}>
          {breadCrumbMenu}
          <div className={s.container}>
            <AppSummaryRow app={app} />
            <Banner type="top-center" />
            <div
              className={s.description}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: app.descriptionHTML }}
            />
            <Banner type="bottom-center" />
          </div>
          <Breadcrumb>
            <Breadcrumb.Item active>
              Recommended for You
            </Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Grid>
              <Row className="show-grid">
                {apps.map((similarApp, index) => (
                  //eslint-disable-next-line
                  <Col key={`col_${index}`} md={2}>
                    <AppSimilar similarApp={similarApp} countryName={countryName} />
                  </Col>
                ))}
              </Row>
            </Grid>
          </div>
          {breadCrumbMenu}
          <div className={s.anchor}>
            <h2>{app.title.toLowerCase()} app trends in {capitalize(countryName).toLowerCase()}</h2>
            <h2>{app.title.toLowerCase()} trends in {capitalize(countryName).toLowerCase()}</h2>
            <h2>{app.title.toLowerCase()} app trends {capitalize(countryName).toLowerCase()}</h2>
            <h2>{app.title.toLowerCase()} trends {capitalize(countryName).toLowerCase()}</h2>
            <h2>{app.title.toLowerCase()} app trends</h2>
            <h2>{app.title.toLowerCase()} app trends 2017</h2>
            <h2>{app.title.toLowerCase()} trends in 2017</h2>
          </div>
        </div>
      );
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h2>Infographic highlighting the top mobile app trends in {capitalize(countryName.split('-').join(' '))}</h2>
            Server undermaintain
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AppDesktop);
