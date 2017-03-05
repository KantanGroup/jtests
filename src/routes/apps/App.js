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
import { Line } from 'react-chartjs-2';
import s from './App.css';
import { imageServer } from '../../config';
import { capitalize } from '../../common';
import Breadcrumb from '../../components/Breadcrumb';

/* eslint max-len: ["error", 200]*/
class App extends React.Component {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    app: PropTypes.shape(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'All category',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 0, 0, 0, 0, 0, 100, 90, 80, 70],
        },
        {
          label: 'Game category',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(105,158,35,0.4)',
          borderColor: 'rgba(105,158,35,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(105,158,35,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(105,158,35,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 0, 100, 90, 80, 70],
        },
      ],
    };
    this.setState({ data });
  }

  render() {
    const { app, countryName, countryCode } = this.props;
    if (app) {
      /* eslint-disable */
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
          </Breadcrumb>
          <div className={s.container}>
            <center>
              <h2>Infographic highlighting the top mobile app trends in {capitalize(countryName.split('-').join(' '))}</h2>
            </center>
            <Image className={s.image} src={`${imageServer}/icon/${app.appId}/icon.png`} rounded width={170} height={170} alt={`App trends ${app.title}`} />
            <div className={s.description} dangerouslySetInnerHTML={{ __html: app ? app.descriptionHTML : 'Server undermaintain' }} />
            <Line data={this.state.data} />
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
