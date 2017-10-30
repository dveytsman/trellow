import { connect } from 'react-redux';
import Boards from './boards';
import { logout } from '../../actions/session_actions';
import { hideDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    dropdownVisible: state.dropdown
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    logout: () => dispatch(logout()),
    hideDropdown: () => dispatch(hideDropdown())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
