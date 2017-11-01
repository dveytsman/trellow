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
        <ul>
          <DropdownContainer name="create-down">
            <CreateBoardContainer />
          </DropdownContainer>
        </ul>
      );
    }else {
      return(
        <ul>
          {this.props.boards.map(board => <Link to={`/boards/${board.id}`}><li key={board.id}>{board.title}</li></Link>)}
          <DropdownContainer name="create-down">
            <CreateBoardContainer />
          </DropdownContainer>
        </ul>
      );
    }
  }
}
export default BoardIndex;
