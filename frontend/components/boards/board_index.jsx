import React from 'react';
import {Link} from 'react-router-dom';
import {fetchBoards, createBoard} from '../../actions/board_actions';
import CreateBoardContainer from './create_board_container';
import DropdownContainer from '../navbar/dropdown_container';

class BoardIndex extends React.Component{
  constructor(props){
    super(props);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  componentDidMount(){
    this.props.fetchBoards();
  }

  toggleDropDown(name){
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.showDropdown(name);
    // this.setState({
    //   dropdownVisible: true
    // });
    };
  }

  render(){
    console.log(Object.keys(this.props.boards).length);
    if(Object.keys(this.props.boards).length === 0){
      return(
        <div className="board-index-div">
          <ul>
            <div className="board-items board-items-cont" onClick={this.toggleDropDown('dropdown-create') }>
              <p>Create Board</p>
              <DropdownContainer name="dropdown-create">
                <CreateBoardContainer />
              </DropdownContainer>
            </div>
          </ul>
        </div>
      );
    }else {
      return(
          <ul className="board-index-div">
            <div className="board-index-outer">
            {this.props.boards.map(board => <Link key={board.id} to={`/boards/${board.id}`}><li
              className="board-items" >{board.title}</li></Link>)}
              <div className="board-items-cont board-items" onClick={this.toggleDropDown('dropdown-create') }>
                <p>Create Board</p>
                <DropdownContainer name="dropdown-create">
                  <CreateBoardContainer />
                </DropdownContainer>
              </div>
            </div>
          </ul>

      );
    }
  }
}
export default BoardIndex;
