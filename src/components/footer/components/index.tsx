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
  </div>
);

export default Footer;