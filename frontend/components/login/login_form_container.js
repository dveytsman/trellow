import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, removeSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    login: user => dispatch(login(user)),
    removeSessionErrors: (errors)=> dispatch(removeSessionErrors(errors))

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
