/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Link from '../../components/Link';
import Flag from '../../components/Flag';

class Country extends React.Component {
  static propTypes = {
    store: PropTypes.string.isRequired,
    country: PropTypes.shape(PropTypes.object).isRequired,
  };

  render() {
    const { country, store } = this.props;
    return (
      <Link
        title={`App trends in ${country.countryName}`}
        key={`country_id_${country.id}`}
        to={`/top-mobile-app-trend-in-${country.countryName.toLowerCase().split(' ').join('-')}/${store}/top-app`}
      >
        <Flag countryCode={country.countryCode} countryName={country.countryName} size={30} />
      </Link>
    );
  }
}

export default Country;
