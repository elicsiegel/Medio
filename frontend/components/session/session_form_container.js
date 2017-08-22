import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearErrors: () => dispatch(receiveErrors([])), 
    processForm: (user) => {
      if(ownProps.location.pathname ===  '/login'){
        return dispatch(login(user));
      }
      else{
        return dispatch(signup(user));
      }
    } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);