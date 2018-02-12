import { connect } from 'react-redux';
import { createList, updateList, deleteList} from '../../actions/list_actions';
import ListIndex from './list_index';
import { showDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    board: ownProps.board,
    lists: (ownProps.board) ? ownProps.board.listIds.map(id => state.lists[id]) : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showDropdown: (name) => dispatch(showDropdown(name)),
    createList: (list) => dispatch(createList(list)),
    updateList: (list) => dispatch(updateList(list)),
    deleteList: (list) => dispatch(deleteList(list))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
