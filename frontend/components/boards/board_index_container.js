import { connect } from 'react-redux';
import { receiveAllBoards, fetchBoard, fetchBoards, createBoard } from '../../actions/board_actions';
import BoardIndex from './board_index';
import { showDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    boards: Object.values(state.boards)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showDropdown: (name) => dispatch(showDropdown(name)),
    fetchBoards: (boards) => dispatch(fetchBoards(boards)),
    createBoard: (board) => dispatch(createBoard(board))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
