/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export default {

  path: '/top-mobile-app-trend-in-:countryName/:countryCode',

  async action({ params }) {
    const countryName = params.countryName;
    return {
      redirect: `/top-mobile-app-trend-in-${countryName}/googlestore/top-app`,
      status: 301,
    };
  },

};
