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
import s from './Top.css';
import TopColumn from './TopColumn';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 200]*/
class Top extends React.Component {
  static propTypes = {
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    topgrossing: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingFree: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingPaid: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingNewPaid: PropTypes.arrayOf(PropTypes.object).isRequired,
    topsellingNewFree: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { topgrossing, topsellingFree, topsellingPaid, topsellingNewFree, countryName } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h2>Infographic highlighting the top mobile app trends in {capitalize(countryName.split('-').join(' '))}</h2>
          </center>
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={3}>
                <TopColumn title="Top grossing" apps={topgrossing.slice(0, 10)} countryName={countryName} />
              </Col>
              <Col sm={6} md={3}>
                <TopColumn title="Top free" apps={topsellingFree.slice(0, 10)} countryName={countryName} />
              </Col>
              <Col smHidden md={3}>
                <TopColumn title="Top paid" apps={topsellingPaid.slice(0, 10)} countryName={countryName} />
              </Col>
              <Col smHidden md={3}>
                <TopColumn title="Top new free" apps={topsellingNewFree.slice(0, 10)} countryName={countryName} />
              </Col>
            </Row>
          </Grid>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Top);
