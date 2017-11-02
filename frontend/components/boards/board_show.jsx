import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
class BoardShow extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }
  render(){
    return(
      <div>
        <NavbarContainer/>
        <div>{this.props.board.title}</div>
      </div>
    );
  }
}


export default BoardShow;
