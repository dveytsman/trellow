import React from 'react';
import { connect } from 'react-redux';
import CreateBoard from './create_board';
import { createBoard } from '../../actions/board_actions';
import { hideDropdown, showDropdown } from '../../actions/dropdown_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    board: ownProps.board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBoard: (board) => dispatch(createBoard(board)),
    hideDropdown: () => dispatch(hideDropdown()),
    showDropdown: (board) => dispatch(showDropdown(board))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
