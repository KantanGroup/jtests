import classNames from 'classnames';
import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import { splitBsProps } from './bootstrapUtils';

class Breadcrumb extends React.Component {
  render() {
    const { className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

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
