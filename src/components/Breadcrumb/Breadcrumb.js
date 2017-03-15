import classNames from 'classnames';
import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import { splitBsProps } from './bootstrapUtils';

class Breadcrumb extends React.Component {
  render() {
    const [bsProps, elementProps] = splitBsProps(this.props);

    return (
      <ol
        {...elementProps}
        role="navigation"
        aria-label="breadcrumbs"
        className="breadcrumb"
      />
    );
  }
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
