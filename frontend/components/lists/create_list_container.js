import React from 'react';
import { connect } from 'react-redux';
import CreateList from './create_list';
import { createList } from '../../actions/list_actions';
import { hideDropdown, showDropdown } from '../../actions/dropdown_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    list: ownProps.list,
    board: ownProps.board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createList: (list) => dispatch(createList(list)),
    hideDropdown: () => dispatch(hideDropdown()),
    showDropdown: (list) => dispatch(showDropdown(list))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
