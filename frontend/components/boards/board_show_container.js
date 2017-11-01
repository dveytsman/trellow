
import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards[parseInt(ownProps.match.params.boardId)]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
