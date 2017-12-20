import { connect } from 'react-redux';

export const withRoutePath = connect((state) => ({
  routePath: state.routing.locationBeforeTransitions.pathname
}));