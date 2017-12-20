import * as React from 'react';
const styles = require('../styles.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import { Link } from 'react-router';
import { ILink } from 'interfaces';

export const FooterLink = ({ name, isActive, to }: ILink) => (
  <Link to={to} className={cx({ 'active': isActive })}>{name}</Link>
);