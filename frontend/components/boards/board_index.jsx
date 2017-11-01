import React from 'react';
import {Link} from 'react-router-dom';
import {fetchBoards, createBoard} from '../../actions/board_actions';

class BoardIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

    console.log('runs', this.props.boards);
    this.props.fetchBoards();
  }

  render(){
    if(Object.keys(this.props.boards).length === 0){
      return null;
    }else {
      return this.props.boards.map(board => <li key={board.id}>{board.title}</li>);
    }
  }
}
export default BoardIndex;
