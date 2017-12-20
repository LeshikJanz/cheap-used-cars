import * as React from 'react';
import './style.scss';
import { headerLinks } from './links';
import { MenuLink } from './menuLink';
import { withRoutePath } from '../withRoutePath';
import { PHONE_NUMBER } from 'constants/index';
const phone = require('assets/icons/phone.png');
const phoneBackground = require('assets/icons/phone-background.png');
const logo = require('assets/images/logo.png');

const Header = ({ routePath }) => (
  <div className="headerContainer">
    <div className="topBar"/>
    <div className="phoneImage">
      <img src={phoneBackground}/>
      <img className="phone" src={phone}/>
      <div className="phoneNumber">{PHONE_NUMBER}</div>
    </div>

    <div className="headerMainBlock">
      <img src={logo}/>
      <div className="links">
        {
          headerLinks.map(link =>
            <MenuLink
              key={link.id}
              isActive={ routePath === link.to }
              {...link}/>)
        }
      </div>
    </div>
  </div>
);

export default withRoutePath(Header);
