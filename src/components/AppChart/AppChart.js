/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';
import { capitalize, labels, getSeriesOfTrend } from '../../common';

/* eslint max-len: ["error", 200]*/
class AppChart extends React.Component {
  static propTypes = {
    countryName: PropTypes.string.isRequired,
    app: PropTypes.shape(PropTypes.object),
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
    return (
      <ReactHighcharts config={this.state.config} />
    );
  }
}

export default AppChart;
