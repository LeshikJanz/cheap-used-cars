import * as React from 'react';
import { Header, Footer } from 'components';
import './styles.scss';

const Base = ({ children }) => (
  <div className="baseContainer">
    <Header/>
    {children}
    <Footer/>
  </div>
);

export default Base;