import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import { splitBsProps } from './bootstrapUtils';

class Breadcrumb extends React.Component {
  render() {
    // eslint-disable-next-line
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
