import classNames from 'classnames';
import React from 'react';

import Link from '../Link';

const propTypes = {
  /**
   * If set to true, renders `span` instead of `a`
   */
  active: React.PropTypes.bool,
  /**
   * `href` attribute for the inner `a` element
   */
  href: React.PropTypes.string, //eslint-disable-line
  /**
   * `title` attribute for the inner `a` element
   */
  title: React.PropTypes.node, //eslint-disable-line
  /**
   * `target` attribute for the inner `a` element
   */
  target: React.PropTypes.string, //eslint-disable-line
};

const defaultProps = {
  active: false,
};

class BreadcrumbItem extends React.Component {
  render() {
    // eslint-disable-next-line
    const { active, href, title, target, children, className } = this.props;
    // Don't try to render these props on non-active <span>.
    const linkProps = { href, title, children, target };
    let linkCompoment;
    if (active) {
      linkCompoment = (
        <span {...linkProps} />
      );
    } else {
      // eslint-disable-next-line
      if (href.startsWith('http://')) {
        linkCompoment = (
          // eslint-disable-next-line
          <a {...linkProps} rel="follow, index" href={href} />
        );
      } else {
        linkCompoment = (
          <Link {...linkProps} to={href} />
        );
      }
    }
    return (
      <li className={classNames(className, { active })}>
        {linkCompoment}
      </li>
    );
  }
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
