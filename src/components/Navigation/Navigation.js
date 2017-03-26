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
import { Nav, Navbar } from 'react-bootstrap';
import s from './Navigation.css';
import Link from '../Link';
import NavItem from '../NavItem';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>Zuzuapps store</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem title="App trends in 2017" href={'/'}>
                App trends in 2017
              </NavItem>
              <NavItem title="Download apps free" href={'http://zuzuapps.com'}>
                Download apps free
              </NavItem>
              <NavItem title="App trends in the world" href={'/top-mobile-app-trend-in-the-world'}>
                All countries
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
