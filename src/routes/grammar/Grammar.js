/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Grammar.css';

/* eslint func-names: ["error", "always"]*/

class Grammar extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  render() {
    const { content } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Grammar);
