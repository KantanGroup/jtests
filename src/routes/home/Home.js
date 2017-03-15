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
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { GridList, GridTile } from 'material-ui/GridList';
import s from './Home.css';
import Link from '../../components/Link';
import Breadcrumb from '../../components/Breadcrumb';

const desktopStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  image: {
    padding: 20,
  },
};

class Home extends React.Component {
  static propTypes = {
    apps: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  render() {
    const { apps } = this.props;
    return (
      <div className={s.root}>
        <Breadcrumb>
          <Breadcrumb.Item active>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <div style={desktopStyles.root}>
            <GridList
              cols={6}
              style={desktopStyles.gridList}
            >
              {apps.map(app => (
                <Link key={`link_${app.appId}`} to={`/download/apk/${app.appId}`}>
                  <GridTile
                    key={app.appId}
                    title={app.title}
                    subtitle={<span>by <b>{app.developer.devId}</b></span>}
                    actionIcon={<IconButton>{app.score}<StarBorder color="white" /></IconButton>}
                  >
                    <img
                      style={desktopStyles.image}
                      className="img-rounded"
                      src={`${app.icon.startsWith('http') ? app.icon : `http:${app.icon}`}`}
                      alt={`Download ${app.title} apk`}
                    />
                  </GridTile>
                </Link>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
