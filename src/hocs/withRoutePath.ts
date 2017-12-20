import { connect } from 'react-redux';

const withRoutePath = connect((state) => ({
  routePath: state.routing.locationBeforeTransitions.pathname
}));

export default withRoutePath;