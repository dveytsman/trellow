import React from 'react';


class CreateBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.board ? props.board.title : '',
    };

  }
  handleChange(e){
    e.stopPropagation();

    this.setState({title: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.createBoard({title: this.state.title});
    this.setState({title: ''});
    this.props.showDropdown("create-down");
  }


  render(){
    return(
      <div onClick={(e)=> e.stopPropagation()}>
        <p>Create Board</p>
        <hr/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.title} onChange={this.handleChange.bind(this)} type="text" placeholder="Board Name"/>
          <input type="submit" value="Create"/>
        </form>
      </div>
    );
  }
}




export default CreateBoard;
