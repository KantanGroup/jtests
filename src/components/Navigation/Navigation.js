/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import s from './Navigation.css';
import Link from '../Link';
import NavItem from '../NavItem';

const messages = defineMessages({
  home: {
    id: 'navigation.home',
    defaultMessage: 'Home',
    description: 'Home link in header',
  },
  about: {
    id: 'navigation.about',
    defaultMessage: 'About',
    description: 'About link in header',
  },
  contact: {
    id: 'navigation.contact',
    defaultMessage: 'Contact',
    description: 'Contact link in header',
  },
  login: {
    id: 'navigation.login',
    defaultMessage: 'Log in',
    description: 'Log in link in header',
  },
  or: {
    id: 'navigation.separator.or',
    defaultMessage: 'or',
    description: 'Last separator in list, lowercase "or"',
  },
  signup: {
    id: 'navigation.signup',
    defaultMessage: 'Sign up',
    description: 'Sign up link in header',
  },
});

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={"/"}>Zuzuapps store</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href={'/'}>
                Home
              </NavItem>
              <NavItem href={'http://topapptrends.com/top-mobile-app-trend-in-the-world'}>
                App trends in countries
              </NavItem>
              <NavItem href={'/login'}>
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
