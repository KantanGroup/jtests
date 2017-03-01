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
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Grid, Row, Col, Breadcrumb } from 'react-bootstrap';
import s from './Top.css';
import TopColumn from './TopColumn';
import Link from '../../components/Link';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 200]*/
class Top extends React.Component {
  static propTypes = {
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    topgrossing: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingFree: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingPaid: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingNewPaid: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingNewFree: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { topgrossing, topsellingFree, topsellingPaid, topsellingNewFree, topsellingNewPaid, countryName, countryCode } = this.props;
    const columns = [];
    if (topgrossing != null && topgrossing.length) {
      columns.push(
        <TopColumn title="Top grossing" apps={topgrossing.slice(0, 10)} countryName={countryName} countryCode={countryCode} />,
      );
    }
    if (topsellingFree != null && topsellingFree.length) {
      columns.push(
        <TopColumn title="Top free" apps={topsellingFree.slice(0, 10)} countryName={countryName} countryCode={countryCode} />,
      );
    }
    if (topsellingPaid != null && topsellingPaid.length) {
      columns.push(
        <TopColumn title="Top paid" apps={topsellingPaid.slice(0, 10)} countryName={countryName} countryCode={countryCode} />,
      );
    }
    if (topsellingNewFree != null && topsellingNewFree.length) {
      columns.push(
        <TopColumn title="Top new free" apps={topsellingNewFree.slice(0, 10)} countryName={countryName} countryCode={countryCode} />,
      );
    }
    let columnLen = columns.length;
    if (columnLen !== 0) {
      if (columnLen !== 4) {
        if (topsellingNewPaid != null && topsellingNewPaid.length) {
          columns.push(
            <TopColumn title="Top new paid" apps={topsellingNewPaid.slice(0, 10)} countryName={countryName} countryCode={countryCode} />,
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
              <Breadcrumb.Item active>
                App trends in {capitalize(countryName.split('-').join(' '))}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={s.container}>
            <center>
              <h2>Infographic highlighting the top mobile app trends in {capitalize(countryName.split('-').join(' '))}</h2>
            </center>
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
            <p />
            <p />
            <p />
            <Grid>
              <Row>
                <Col sm={6} md={6}>
                  <center>
                    <Link to={`/app-trend-in-${countryName}/googlestore/app-category`}>
                      <Button bsSize="large" bsStyle="default"><Glyphicon glyph="search" /> Trends mobile app</Button>
                    </Link>
                  </center>
                </Col>
                <Col sm={6} md={6}>
                  <center>
                    <Link to={`/app-trend-in-${countryName}/googlestore/game-category`}>
                      <Button bsSize="large" bsStyle="default"><Glyphicon glyph="search" /> Trends mobile game</Button>
                    </Link>
                  </center>
                </Col>
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
            <h2>Infographic highlighting the top mobile app trends in {capitalize(countryName.split('-').join(' '))}</h2>
            Server undermaintain
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Top);
