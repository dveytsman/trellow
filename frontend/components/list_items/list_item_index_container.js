import { connect } from 'react-redux';
import { createListItem, updateListItem, deleteListItem } from '../../actions/list_item_actions';
import ListItemIndex from './list_item_index';

const mapStateToProps = (state, ownProps) => {

  return {
    list: (ownProps.list)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createListItem: (listItem, boardId) => dispatch(createListItem(listItem, boardId)),
    updateListItem: (listItem) => dispatch(updateListItem(listItem)),
    deleteListItem: (listItem, listId) => dispatch(deleteListItem(listItem, listId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemIndex);
