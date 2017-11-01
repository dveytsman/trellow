import { connect } from 'react-redux';
import BoardDropdown from './boards_dropdown';
import {showDropdown} from '../../actions/dropdown_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    boarddropdownVisible: state.boarddropdown
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showDropdown: (name) => dispatch(showDropdown(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (BoardDropdown);
