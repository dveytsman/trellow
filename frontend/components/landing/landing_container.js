import { connect } from 'react-redux';
import Landing from './landing';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    login: user => dispatch(login(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
