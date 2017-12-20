import * as React from 'react';
const styles = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { Link } from 'react-router';
import { ILink } from '../../interfaces/index';

export const MenuLink = ({ name, isActive, to }: ILink) => (
  <div className="menuLinkContainer">
    <Link to={to} className={cx({ 'active': isActive })}>{name}</Link>
  </div>
);