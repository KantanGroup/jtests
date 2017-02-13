/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Grid, Col } from 'react-bootstrap';
import s from './Grammars.css';
import Link from '../../components/Link';

class Grammars extends React.Component {
  static propTypes = {
    grammars: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>日本語文型辞典</h1>
          <Grid>
            {this.props.grammars.map(item => (
              <Col xs={6} md={6}>
                <Link className={s.newsTitle} to={`/japanese/grammar/${item.id}/${item.grammar.trim()}`}>{item.id}. {item.grammar}</Link>
              </Col>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grammars: state.grammars.grammars,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Grammars));
