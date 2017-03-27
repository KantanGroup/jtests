/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
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
    require('./top').default,
    require('./top/topgoogle').default,
    require('./top/listgoogle').default,
    require('./apps').default,
    require('./apps/category').default,
    require('./countries').default,
    // require('./categories').default,
    require('./categories/googlestore').default,
    require('./categories/appstore').default,
    require('./categories/topgoogle').default,
    require('./categories/listgoogle').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Mobile app trends in 2017'} - Top apps download`;
    route.description = route.description || 'Enjoy millions of the latest Android apps, games, music, movies, TV, books, magazines & more. Anytime, anywhere, across your devices.';
    route.canonicalUrl = `${route.canonicalUrl || ''}`;
    route.imageUrl = `${route.imageUrl || ''}`;

    return route;
  },

};
