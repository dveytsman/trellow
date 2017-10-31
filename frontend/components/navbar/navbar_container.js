import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import {showDropdown} from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    dropdownVisible: state.dropdown,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    logout: () => dispatch(logout()),
    showDropdown: (dropdown) => dispatch(showDropdown(dropdown)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
