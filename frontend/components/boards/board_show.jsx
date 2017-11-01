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
        <p>{this.props.board.title}</p>
      </div>
    );
  }
}


export default BoardShow;
