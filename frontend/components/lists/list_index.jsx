import React from 'react';
import { Link } from 'react-router-dom';
import {fetchBoards, createBoard} from '../../actions/board_actions';
import { createList } from '../../actions/list_actions';
import CreateListContainer from '../lists/create_list_container';
import DropdownContainer from '../navbar/dropdown_container';


class ListIndex extends React.Component{
  constructor(props){
    super(props);

  }

  toggleDropDown(name){
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.showDropdown(name);
    };
  }
  componentWillReceiveProps(ownProps){
    // debugger

  }


  render(){

    var content = (this.props.lists === null) ? [] : this.props.lists;

    const listsIndex = content.map(list => {
      if(list === undefined){
        return '';
      }
      return(
        <li key={list.id}
          className="list-items">{list.title}
        </li>
      );
    });
    return(
        <ul>
          <div  className='list-container'>
            {listsIndex}
          </div>
          <div className="board-items board-items-cont" onClick={this.toggleDropDown('create-list') }>
            <p>Create List</p>
            <DropdownContainer name="create-list">
              <CreateListContainer board={this.props.board}/>
            </DropdownContainer>
          </div>
        </ul>
    );
  }
}

export default ListIndex;
