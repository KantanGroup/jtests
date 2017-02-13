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
import RaisedButton from 'material-ui/RaisedButton';
import s from './Home.css';
import Link from './../../components/Link';

const style = {
  width: 280,
  margin: 5,
};

class Home extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <center>
            <h1>Japanese test</h1>
            <Link to="/japanese/kanjis"><RaisedButton label="漢字" primary style={style} /></Link>
            <br />
            <Link to="/japanese/grammars"><RaisedButton label="日本語文型辞典" primary style={style} /></Link>
          </center>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
