/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import Rater from 'react-rater';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import s from './App.css';
import Breadcrumb from '../../components/Breadcrumb';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

class App extends React.Component {
  static propTypes = {
    app: React.PropTypes.object, //eslint-disable-line
  }

  render() {
    const { app } = this.props;
    return (
      <div className={s.root}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Download apps free
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {app.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <div className={s.app}>
            <Grid>
              <Row className="show-grid">
                <Col md={2}>
                  <div className={s.appImage}>
                    <Image src={app.icon} rounded width={125} height={125} alt={`App trends ${app.title}`} />
                  </div>
                </Col>
                <Col md={5}>
                  <div className={s.appDescription}>
                    <div className={s.appName}>{app.title}</div>
                    <div className={s.appDeveloper}>{app.genre}</div>
                    <div className={s.appDeveloper}>{app.minInstalls}{app.maxInstalls ? `-${app.maxInstalls}` : ''} downloaded</div>
                    <Rater interactive={false} rating={app.score} />
                    <div className={s.appPrice}>{app.price === '0' ? 'Free' : app.price}</div>
                    <div className={s.appDeveloper}>{app.version}</div>
                  </div>
                </Col>
                <Col md={5}>
                  <div className={s.appInformation}>
                    <div className={s.appName}>{app.developerId}</div>
                    <div className={s.appDeveloper}>{app.developerEmail}</div>
                    <div className={s.appDeveloper}>{app.developerWebsite}</div>
                    <div className={s.appDeveloper}>{app.updated}</div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <center><img className={s.ads} src={'/ads.jpeg'} alt="Download app" /></center>
          <Breadcrumb>
            <Breadcrumb.Item active>
              Summary
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className={s.description}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: app.descriptionHTML }}
          />
          <center><img className={s.ads} src={'/ads.jpeg'} alt="Download app" /></center>
          <Breadcrumb>
            <Breadcrumb.Item active>
              Screenshots
            </Breadcrumb.Item>
          </Breadcrumb>
          <div style={styles.root}>
            <GridList
              cellHeight={320}
              style={styles.gridList}
              cols={2.2}
            >
              {app.screenshots.map((screenshot, index) => (
                <GridTile
                  key={`${app.appId}_${index}`} //eslint-disable-line
                  title={app.title}
                  actionIcon={<IconButton>${app.score} <StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img
                    src={screenshot}
                    alt={`Download ${app.title} apk`}
                  />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
        <div className={s.anchor}>
          <h2>download {app.title.toLowerCase()} app</h2>
          <h2>download {app.title.toLowerCase()} app free</h2>
          <h2>download {app.title.toLowerCase()} app for android</h2>
          <h2>download {app.title.toLowerCase()} app for android free</h2>
          <h2>download {app.title.toLowerCase()} application</h2>
          <h2>download {app.title.toLowerCase()} application free</h2>
          <h2>download {app.title.toLowerCase()} apk</h2>
          <h2>download {app.title.toLowerCase()} apk free</h2>
          <h2>download {app.title.toLowerCase()} apk 2017</h2>
          <h2>download {app.title.toLowerCase()} apk free 2017</h2>
          <h2>download {app.title.toLowerCase()} android apk</h2>
          <h2>download {app.title.toLowerCase()} android apk free</h2>
          <h2>download {app.title.toLowerCase()} android apk 2017</h2>
          <h2>download {app.title.toLowerCase()} android apk free 2017</h2>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(App);
