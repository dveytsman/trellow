import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { withRouter } from 'react-router-dom';
import DropdownContainer from '../navbar/dropdown_container';
import RenameBoardContainer from './rename_board_container';
import ListIndexContainer from '../lists/list_index_container';

class BoardShow extends React.Component{
  constructor(props){
    super(props);
    this.toggleDropDown = this.toggleDropDown.bind(this);

  }
  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }
  handleDelete(e){
    e.preventDefault();
    this.props.deleteBoard(this.props.match.params.boardId);
    this.props.history.push("/boards");
  }

  toggleDropDown(name){
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.showDropdown(name);
    };
  }
  render(){
    let content = (this.props.board) ? this.props.board.title : null;
    return(
      <div className="blue" onClick={this.toggleDropDown('')}>
        <NavbarContainer/>
        <div className="board-show-container">
          <div className="edity" onClick={this.toggleDropDown('update-dropdown')}>
            <h3>
              {content}
            </h3>
            <p>click to rename this board</p>
            <DropdownContainer className="edit-form" name="update-dropdown">
              <RenameBoardContainer match={this.props.match}/>
            </DropdownContainer>
          </div>
          <div className='delete' onClick={this.handleDelete.bind(this)}>
            Click here to delete the board
          </div>
        </div>
        <ListIndexContainer board={this.props.board}/>
      </div>
    );
  }
}


export default BoardShow;
