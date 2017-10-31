import React from 'react';
import {Link} from 'react-router-dom';
import {receiveAllBoards} from '../../actions/board_actions';

class BoardIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.receiveAllBoards(this.props.boards);
  }

  render(){
    if(Object.keys(this.props).length === 0){
      return null;
    }else {
      return this.props.boards.map(board => <li>{board.title}</li>);
    }
  }
}
export default BoardIndex;
