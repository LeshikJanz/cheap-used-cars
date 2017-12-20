import React from 'react';
import { Route } from 'react-router';
import { urls } from "../urls";
import PageNotFound from '../components/pageNotFound/index';
import Base from '../components/base/index';
import { Main, Contact, About, Privacy } from './index';

export default (
  <Route component={Base}>
    <Route path={urls.index} component={Main}/>
    <Route path={urls.about} component={About}/>
    <Route path={urls.contact} component={Contact}/>
    <Route path={urls.privacy} component={Privacy}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
);