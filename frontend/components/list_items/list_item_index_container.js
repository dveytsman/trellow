import { connect } from 'react-redux';
import { createListItem, updateListItem, deleteListItem } from '../../actions/list_item_actions';
import ListItemIndex from './list_item_index';

const mapStateToProps = (state, ownProps) => {
  return {
    board: ownProps.board,
    lists: (ownProps.board) ? ownProps.board.listIds.sort().map(id=> state.lists[id]) : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createListitem: (listItem) => dispatch(createListItem(listItem)),
    updateListItem: (listItem) => dispatch(updateListItem(listItem)),
    deleteListItem: (listItem) => dispatch(deleteListItem(listItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemIndex);
