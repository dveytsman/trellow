import React from 'react';
import { connect } from 'react-redux';
import RenameBoard from './rename_board';
import { updateBoard } from '../../actions/board_actions';
import { hideDropdown, showDropdown } from '../../actions/dropdown_actions';



const mapStateToProps = (state, ownProps) => {

  return {
    id: ownProps.match.params.boardId,
    board: ownProps.board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateBoard: (board) => dispatch(updateBoard(board)),
    hideDropdown: () => dispatch(hideDropdown()),
    showDropdown: (board) => dispatch(showDropdown(board))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenameBoard);
