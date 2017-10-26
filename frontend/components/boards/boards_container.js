import { connect } from 'react-redux';
import Boards from './boards';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
