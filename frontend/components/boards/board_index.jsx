import React from 'react';
import {Link} from 'react-router-dom';
import {fetchBoards, createBoard} from '../../actions/board_actions';
import CreateBoardContainer from './create_board_container';
import DropdownContainer from '../navbar/dropdown_container';

class BoardIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoards();
  }

  render(){
    if(Object.keys(this.props.boards).length === 0){
      return(
        <div className="board-index-div">
          <ul>
            <DropdownContainer name="create-down">
              <CreateBoardContainer />
            </DropdownContainer>
          </ul>
        </div>
      );
    }else {
      return(
          <ul className="board-index-div">
            <div className="board-index-outer">
            {this.props.boards.map(board => <Link to={`/boards/${board.id}`}><li
              className="board-items" key={board.id}>{board.title}</li></Link>)}
              <li>
                <DropdownContainer className="create-board-items" name="create-down">
                  <CreateBoardContainer />
                </DropdownContainer>
              </li>
            </div>
          </ul>

      );
    }
  }
}
export default BoardIndex;
