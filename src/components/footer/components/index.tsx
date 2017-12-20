import * as React from 'react';
import { ILink } from 'interfaces';
import { footerLinks } from '../constants/links';
import { FooterLink } from './footerLink';
const logo = require('assets/images/logo-white.png');
import '../styles.scss';

const Footer = () => (
  <div className="footerContainer">
    <div className="separateLine"/>
    <div className="footerBackground">
      <div className="mainBlock">
        <img className="logo" src={logo} alt=""/>
        <div className="links">
          {
            footerLinks.map((link: ILink) => <FooterLink key={link.id} {...link}/>)
          }
        </div>
      </div>
    </div>
    <div className="additionalText">
      <span>Vehicles shown on this website are available at</span><br/>
      <span>Phoenix Holden. DL1931. MRB 936, Clarkson Holden DL1931. MRB 936, Wanneroo Jeep DL1931, Wanneroo Renault DL1931</span><br/>
      <span>© 2016 All Rights Reserved</span>
    </div>
  </div>
);

export default Footer;