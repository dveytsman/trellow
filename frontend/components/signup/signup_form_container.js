import { connect } from 'react-redux';
import SignupFrom from './signup_form';
import { signup, removeSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    signup: user => dispatch(signup(user)),
    removeSessionErrors: (errors)=> dispatch(removeSessionErrors(errors))

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupFrom);
