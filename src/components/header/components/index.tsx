import * as React from 'react';
import '../style.scss';
import { headerLinks } from '../constants/links';
import { HeaderLink } from './headerLink';
import { withRoutePath } from 'hocs';
import { PHONE_NUMBER } from 'constants/index';
import { ILink } from '../../../interfaces/index';
const phone = require('assets/icons/phone.png');
const phoneBackground = require('assets/icons/phone-background.png');
const logo = require('assets/images/logo-blue.png');

const Header = ({ routePath }) => (
  <div className="headerContainer">
    <div className="topBar"/>
    <div className="headerMainBlock">
      <img src={logo}/>
      <div className="links">
        {
          headerLinks.map((link: ILink) =>
            <HeaderLink
              key={link.id}
              isActive={ routePath === link.to }
              {...link}/>)
        }
      </div>
    </div>
    <div className="phoneImage">
      <img src={phoneBackground}/>
      <img className="phone" src={phone}/>
      <div className="phoneNumber">{PHONE_NUMBER}</div>
    </div>
  </div>
);

export default withRoutePath(Header);
