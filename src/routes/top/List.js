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
import { Grid, Row } from 'react-bootstrap';
import s from './Top.css';
import ListRow from './ListRow';
import Breadcrumb from '../../components/Breadcrumb';
import { capitalize } from '../../common';

/* eslint max-len: ["error", 200]*/
class List extends React.Component {
  static propTypes = {
    collection: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    topapps: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { topapps, countryName, countryCode, collection } = this.props;
    return (
      <div className={s.root}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item title="Download apps free" href="http://zuzuapps.com">
            Download apps free
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            App trends in {capitalize(countryName.split('-').join(' '))}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {capitalize(collection.split('-').join(' '))}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <Grid>
            <Row className="show-grid">
              <ListRow apps={topapps} collection={collection} countryName={countryName} countryCode={countryCode} />
            </Row>
          </Grid>
        </div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item title="Download apps free" href="http://zuzuapps.com">
            Download apps free
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            App trends in {capitalize(countryName.split('-').join(' '))}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {capitalize(collection.split('-').join(' '))}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default withStyles(s)(List);
