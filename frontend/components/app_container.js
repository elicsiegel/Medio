import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';

import { deactivateAllDropdowns } from '../actions/dropdown_actions';
import App from './App';

// const mSTP = (props) => {debugger; return {};};

const mapDispatchToProps = dispatch => ({
  deactivateAllDropdowns: () => dispatch(deactivateAllDropdowns()),
});

export default withRouter(connect(
  // mSTP,
  null,
  mapDispatchToProps
)(App));