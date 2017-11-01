import React from 'react';
import { connect } from 'react-redux';
import CreateBoard from './create_board';
import { createBoard } from '../../actions/board_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    board: ownProps.board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBoard: (board) => dispatch(createBoard(board))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
