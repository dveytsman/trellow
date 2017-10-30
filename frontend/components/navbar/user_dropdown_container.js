import { connect } from 'react-redux';
import UserDropDown from './user_dropdown_container';
import { logout } from '../../actions/session_actions';
import {showDropdown} from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    dropdownVisible: false
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    logout: () => dispatch(logout()),
    showDropdown: () => dispatch(showDropdown())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown);
