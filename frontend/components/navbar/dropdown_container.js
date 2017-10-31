import React from 'react';
import { connect } from 'react-redux';
import { hideDropdown } from '../../actions/dropdown_actions';
import Dropdown from './dropdown';

const mapStateToProps = (state, ownProps) => {
  return {
    visible: state.dropdown === ownProps.name,
    name: ownProps.name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideDropdown: (e) => dispatch(hideDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
