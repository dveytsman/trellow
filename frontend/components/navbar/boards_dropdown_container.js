import { connect } from 'react-redux';
import BoardDropdown from './boards_dropdown';
import showBoardDropdown from '../../actions/dropdown_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    boarddropdownVisible: state.boarddropdown
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showBoardDropdown: () => dispatch(showBoardDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (BoardDropdown);
