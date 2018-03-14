import React from 'react';
import { connect } from 'react-redux';
import UpdateList from './update_list';
import { updateList } from '../../actions/list_actions';
import { hideDropdown, showDropdown } from '../../actions/dropdown_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    list: ownProps.list,
    board: ownProps.board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateList: (list) => dispatch(updateList(list)),
    hideDropdown: () => dispatch(hideDropdown()),
    showDropdown: (list) => dispatch(showDropdown(list))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateList);
