import React from 'react';
import { Route } from 'react-router';
import { urls } from "../urls";
import PageNotFound from '../components/pageNotFound/index';
import Base from '../components/base/index';
import { Main } from './index';

export default (
  <Route component={Base}>
    <Route path={urls.index} component={Main}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
);