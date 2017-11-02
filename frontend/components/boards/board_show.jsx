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
    let content = (this.props.board) ? this.props.board.title : null;
    return(
      <div>
        <NavbarContainer/>
        <div>{content}</div>
      </div>
    );
  }
}


export default BoardShow;
