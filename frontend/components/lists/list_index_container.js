import { connect } from 'react-redux';
import { createList, updateList, deleteList} from '../../actions/list_actions';
import ListIndex from './list_index';
import { showDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    lists: Object.values(state.lists)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showDropdown: (name) => dispatch(showDropdown(name)),
    createList: (list) => dispatch(createList(list)),
    updateList: (list) => dispatch(updateList(list)),
    deleteList: (listId) => dispatch(deleteList(listId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
