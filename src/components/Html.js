/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    canonicalUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
    lang: PropTypes.string,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
    state: null,
    lang: 'en',
    canonicalUrl: null,
    imageUrl: null,
  };

  render() {
    // eslint-disable-next-line
    const { title, description, canonicalUrl, imageUrl, styles, scripts, state, lang, children } = this.props;
    const metaCanonicalUrl = [];
    if (canonicalUrl) {
      metaCanonicalUrl.push(
        <meta property="og:url" content={canonicalUrl} />,
      );
      metaCanonicalUrl.push(
        <link rel="canonical" href={canonicalUrl} />,
      );
    }
    const metaImageUrl = [];
    if (imageUrl) {
      metaImageUrl.push(
        <meta property="og:image" content={imageUrl} />,
      );
      metaImageUrl.push(
        <meta name="twitter:image" content={imageUrl} />,
      );
      metaImageUrl.push(
        <meta name="og:image:width" content="170" />,
      );
      metaImageUrl.push(
        <meta name="og:image:height" content="170" />,
      );
    }
    return (
      <html className="no-js" lang={lang}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="fb:app_id" content="2134596160098950" />
          <meta property="og:site_name" content="App trend in 2017" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="article:publisher" content="https://www.facebook.com/topapptrends" />
          <meta property="article:section" content="Facebook" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@topapptrends" />
          <meta name="twitter:creator" content="@topapptrends" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {metaCanonicalUrl}
          {metaImageUrl}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {styles.map(style =>
            <style
              key={style.id}
              id={style.id}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />,
          )}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html:
            `var giftofspeed = document.createElement('link');
            giftofspeed.rel = 'stylesheet';
            giftofspeed.href = '/css/bootstrap.min.css';
            giftofspeed.type = 'text/css';
            var godefer = document.getElementsByTagName('link')[0];
            godefer.parentNode.insertBefore(giftofspeed, godefer);` }}
          />
          <link rel="stylesheet" href="/react-rater/react-rater.css" />
          <link rel="stylesheet" href="/index.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </head>
        <body>
          <div
            id="app"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: children }}
          />
          {state && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
            />
          )}
          {scripts.map(script => <script key={script} src={script} />)}
          {analytics.google.trackingId &&
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
            />
          }
          {analytics.google.trackingId &&
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          }
          {
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async defer />
          }
          {
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              '(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-7198482773381819",enable_page_level_ads: true'
              }}
            />
          }
        </body>
      </html>
    );
  }
}

export default Html;
