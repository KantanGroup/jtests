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
import ReactHighcharts from 'react-highcharts';
import s from './App.css';
import { imageServer, downloadServer } from '../../config';
import { capitalize, labels, getSeriesOfTrend } from '../../common';
import Breadcrumb from '../../components/Breadcrumb';

/* eslint max-len: ["error", 200]*/
class App extends React.Component {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
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

  constructor(props) {
    super(props);
    const { trend, category, categoryName, countryName, app } = this.props;
    if (app) {
      let series = [];
      if (trend) {
        series = getSeriesOfTrend(series, trend, 'all');
      }
      let chartSubtitle;
      if (category) {
        series = getSeriesOfTrend(series, category, categoryName);
        chartSubtitle = `http://topapptrends.com/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/app/${app.appId}/${categoryName}-category`;
      } else {
        chartSubtitle = `http://topapptrends.com/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/app/${app.appId}`;
      }
      const config = {
        chart: {
          type: 'spline',
        },
        xAxis: {
          categories: labels(),
        },
        yAxis: {
          title: {
            text: 'Index',
          },
          reversed: true,
          min: 1,
        },
        title: {
          text: `${app.title} (App trends in ${capitalize(countryName.split('-').join(' '))})`,
        },
        subtitle: {
          text: chartSubtitle,
        },
        series,
      };
      this.state = {
        config,
      };
    }
  }

  render() {
    const { app, similar, countryName, countryCode, categoryName } = this.props;
    let menuBreadcrumb;
    if (categoryName !== 'all') {
      menuBreadcrumb = (
        <Breadcrumb.Item active>
          In {capitalize(categoryName.split('-').join(' '))}
        </Breadcrumb.Item>
      );
    }
    const apps = similar.apps.slice(0, 12);
    if (app) {
      return (
        <div className={s.root}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/top-mobile-app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/${countryCode}`}>
              App trends in {capitalize(countryName.split('-').join(' '))}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {app.title}
            </Breadcrumb.Item>
            {menuBreadcrumb}
          </Breadcrumb>
          <div className={s.container}>
            <div className={s.app}>
              <Grid>
                <Row className="show-grid">
                  <Col md={2}>
                    <div className={s.appImage}>
                      <Image src={`${imageServer}/icon/${app.appId}/icon.png`} rounded width={125} height={125} alt={`App trends ${app.title}`} />
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
            <ReactHighcharts config={this.state.config} />
            <center><img className={s.ads} src={'/ads.jpeg'} alt="Download app" /></center>
            <div
              className={s.description}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: app.descriptionHTML }}
            />
            <center><img className={s.ads} src={'/ads.jpeg'} alt="Download app" /></center>
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
                  </Col>
                ))}
              </Row>
            </Grid>
          </div>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/top-mobile-app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/${countryCode}`}>
              App trends in {capitalize(countryName.split('-').join(' '))}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {app.title}
            </Breadcrumb.Item>
            {menuBreadcrumb}
          </Breadcrumb>
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

export default withStyles(s)(App);
