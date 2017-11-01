import { connect } from 'react-redux';
import Boards from './boards';
import { logout } from '../../actions/session_actions';
import { hideDropdown, showDropdown } from '../../actions/dropdown_actions';
import { fetchBoards, fetchBoard, createBoard } from '../../actions/board_actions';

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
    hideDropdown: () => dispatch(hideDropdown()),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchBoard: (id)=> dispatch(fetchBoard(id)),
    createBoard: (board) => dispatch(createBoard(board)),
    showDropdown: (name) => dispatch(showDropdown(name))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
