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
import s from './TopCategory.css';
import TopRow from './TopRow';
import Breadcrumb from '../../components/Breadcrumb';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 200]*/
class TopCategory extends React.Component {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    topgrossing: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingFree: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingPaid: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingNewPaid: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingNewFree: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { topgrossing, topsellingFree, topsellingPaid, topsellingNewFree, topsellingNewPaid, countryName, countryCode, categoryName } = this.props;
    const columns = [];
    if (topgrossing != null && topgrossing.length) {
      columns.push(
        <TopRow title="Top grossing" apps={topgrossing.slice(0, 10)} countryName={countryName} />,
      );
    }
    if (topsellingFree != null && topsellingFree.length) {
      columns.push(
        <TopRow title="Top free" apps={topsellingFree.slice(0, 10)} countryName={countryName} />,
      );
    }
    if (topsellingPaid != null && topsellingPaid.length) {
      columns.push(
        <TopRow title="Top paid" apps={topsellingPaid.slice(0, 10)} countryName={countryName} />,
      );
    }
    if (topsellingNewFree != null && topsellingNewFree.length) {
      columns.push(
        <TopRow title="Top new free" apps={topsellingNewFree.slice(0, 10)} countryName={countryName} />,
      );
    }
    let columnLen = columns.length;
    if (columnLen !== 0) {
      if (columnLen !== 4) {
        if (topsellingNewPaid != null && topsellingNewPaid.length) {
          columns.push(
            <TopRow title="Top new paid" apps={topsellingNewPaid.slice(0, 10)} countryName={countryName} />,
          );
        }
      }
      columnLen = columns.length;
      const mdSize = 12 / columnLen;
      return (
        <div className={s.root}>
          <div>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href={`/top-mobile-app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/${countryCode}`}>
                App trends in {capitalize(countryName.split('-').join(' '))}
              </Breadcrumb.Item>
              <Breadcrumb.Item href={`/app-trend-in-${countryName.toLowerCase().split(' ').join('-')}/googlestore/${categoryName.startsWith('game') ? 'game-category' : 'app-category'}`}>
                {categoryName.startsWith('game') ? 'Game Category' : 'App Category'}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {capitalize(categoryName.split('-').join(' '))}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={s.container}>
            <Grid>
              <Row className="show-grid">
                {columns.map((column, index) => (
                  //eslint-disable-next-line
                  <Col key={`col_${index}`} md={mdSize}>
                    {column}
                  </Col>
                ))}
              </Row>
            </Grid>
          </div>
        </div>
      );
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h2>App trends in ${countryName} in {capitalize(countryName.split('-').join(' '))}</h2>
            Server undermaintain
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TopCategory);
