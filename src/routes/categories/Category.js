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
import s from './Category.css';
import Link from '../../components/Link';

const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

/* eslint max-len: ["error", 200]*/
class Category extends React.Component {
  static propTypes = {
    // countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { countryName, categories } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h2>Mobile app trends in category in {capitalize(countryName.split('-').join(' '))}</h2>
          </center>
          <Grid>
            <Row className="show-grid">
              {categories.map((category, index) => (
                //eslint-disable-next-line
                <Col key={`col_${index}`} md={3}>
                  <Link to={`/app-trend-in-${countryName}/googlestore/top-app/${category.split('_').join('-')}-category`}>
                    <div className={s.category}>{capitalize(category.split('_').join(' '))}</div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Category);
