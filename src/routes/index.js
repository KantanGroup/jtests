/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./contact').default,
    require('./login').default,
    require('./about').default,
    require('./privacy').default,
    require('./jlpt').default,
    require('./kanji').default,
    require('./kanjipage').default,
    require('./kanjis').default,
    require('./grammar').default,
    require('./grammars').default,

    // place new routes before...
    require('./content').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Japanese Tests - Japanese Quizzes'} - Jtests`;
    route.description = route.description || 'Try new Japanese quizzes every day. Improve your Japanese significantly with our free online practice tests.';

    return route;
  },

};
