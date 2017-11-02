
import { connect } from 'react-redux';
import { showDropdown } from '../../actions/dropdown_actions';
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards[parseInt(ownProps.match.params.boardId)]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  showDropdown: (name) => dispatch(showDropdown(name)),
  fetchBoard: id => dispatch(fetchBoard(id)),
  updateBoard: board => dispatch(fetchBoard(board)),
  deleteBoard: id => dispatch(deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
