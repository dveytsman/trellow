import { connect } from 'react-redux';
import SignupFrom from './signup_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    signup: user => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupFrom);
