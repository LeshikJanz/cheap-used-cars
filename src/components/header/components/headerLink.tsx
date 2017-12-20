import * as React from 'react';
import { Link } from 'react-router';
import { ILink } from 'interfaces';
const styles = require('./../style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

export const HeaderLink = ({ name, isActive, to }: ILink) =>
  <Link to={to} className={cx({ 'active': isActive })}>{name}</Link>