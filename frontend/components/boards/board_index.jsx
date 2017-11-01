import React from 'react';
import {Link} from 'react-router-dom';
import {fetchBoards, createBoard} from '../../actions/board_actions';
import CreateBoardContainer from './create_board_container';
class BoardIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoards();
  }

  render(){
    if(Object.keys(this.props.boards).length === 0){
      return null;
    }else {
      return(
        <ul>
          {this.props.boards.map(board => <li key={board.id}>{board.title}</li>)}
          <CreateBoardContainer />
        </ul>
      );
    }
  }
}
export default BoardIndex;
