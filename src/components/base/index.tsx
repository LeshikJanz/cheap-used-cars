import * as React from 'react';
import { Header } from 'components';

const Base = ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
);

export default Base;