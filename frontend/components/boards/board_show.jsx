import React from 'react';

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
        <div>{this.props.board.title}</div>
      </div>
    );
  }
}


export default BoardShow;
