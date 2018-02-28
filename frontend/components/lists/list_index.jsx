import React from 'react';
import { Link } from 'react-router-dom';
import {fetchBoards, createBoard} from '../../actions/board_actions';
import { createList } from '../../actions/list_actions';
import CreateListContainer from '../lists/create_list_container';
import DropdownContainer from '../navbar/dropdown_container';


class ListIndex extends React.Component{
  constructor(props){
    super(props);

    this.deleteList = this.deleteList.bind(this);
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

  deleteList(e, list){
    e.preventDefault();
    this.props.deleteList(list);

  }


  render(){
// debugger
    var content = (this.props.lists === null) ? [] : this.props.lists;

    const listsIndex = content.map(list => {
      if(list === undefined){
        return '';
      }
      return(
        <li key={list.id}
          className="list-items">{list.title}
          <button className='delete-list-button' onClick={(e) => this.deleteList(e, list)}>
            delete
          </button>
        </li>
      );
    });
    return(
        <ul>
          <div  className='list-container'>
            {listsIndex}
            <div className="create-list board-items-cont" onClick={this.toggleDropDown('create-list-modal') }>
              <p id="create-list-text">Create List</p>
              <DropdownContainer name="create-list-modal">
                <CreateListContainer board={this.props.board}/>
              </DropdownContainer>
            </div>
          </div>
        </ul>
    );
  }
}

export default ListIndex;
