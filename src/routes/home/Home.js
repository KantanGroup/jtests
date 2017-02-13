/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import s from './Home.css';
import Link from './../../components/Link';

const style = {
  width: 200,
  margin: 5,
};

class Home extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center><h1 className={s.title}>Japanese Test - Japanese Quiz</h1></center>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Link to="/japanese/jlpt-kanji-n5"><FlatButton label="JLPT Kanji N5" primary style={style} /></Link>
              </Col>
              <Col xs={6} md={4}>
                <Link to="/japanese/jlpt-kanji-n4"><FlatButton label="JLPT Kanji N4" primary style={style} /></Link>
              </Col>
              <Col xsHidden md={4}>
                <Link to="/japanese/jlpt-kanji-n3"><FlatButton label="JLPT Kanji N3" primary style={style} /></Link>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Link to="/japanese/jlpt-kanji-n2"><FlatButton label="JLPT Kanji N2" primary style={style} /></Link>
              </Col>
              <Col xs={6} mdOffset={4} md={4}>
                <Link to="/japanese/jlpt-kanji-n1"><FlatButton label="JLPT Kanji N1" primary style={style} /></Link>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Link to="/japanese/joyo-kanji-grade-1"><FlatButton label="Jōyō Kanji Grade 1" primary style={style} /></Link>
              </Col>
              <Col xs={6} md={4}>
                <Link to="/japanese/joyo-kanji-grade-2"><FlatButton label="Jōyō Kanji Grade 2" primary style={style} /></Link>
              </Col>
              <Col xsHidden md={4}>
                <Link to="/japanese/joyo-kanji-grade-3"><FlatButton label="Jōyō Kanji Grade 3" primary style={style} /></Link>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Link to="/japanese/joyo-kanji-grade-4"><FlatButton label="Jōyō Kanji Grade 4" primary style={style} /></Link>
              </Col>
              <Col xs={6} md={4}>
                <Link to="/japanese/joyo-kanji-grade-5"><FlatButton label="Jōyō Kanji Grade 5" primary style={style} /></Link>
              </Col>
              <Col xsHidden md={4}>
                <Link to="/japanese/joyo-kanji-grade-6"><FlatButton label="Jōyō Kanji Grade 6" primary style={style} /></Link>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Link to="/japanese/joyo-kanji-grade-7"><FlatButton label="Jōyō Kanji Grade 7" primary style={style} /></Link>
              </Col>
              <Col xs={6} md={4}>
                <Link to="/japanese/joyo-kanji-grade-8"><FlatButton label="Jōyō Kanji Grade 8" primary style={style} /></Link>
              </Col>
              <Col xsHidden md={4}>
                <Link to="/japanese/joyo-kanji-grade-9"><FlatButton label="Jōyō Kanji Grade 9" primary style={style} /></Link>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} mdOffset={4} md={4}>
                <Link to="/japanese/grammars"><FlatButton label="日本語文型辞典" primary style={style} /></Link>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
