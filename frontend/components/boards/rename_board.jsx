import React from 'react';


class RenameBoard extends React.Component{
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

    this.props.updateBoard({title: this.state.title, id: this.props.id});
    this.props.showDropdown("update-dropdown");
  }


  render(){
    return(
      <div className="create_board_form" onClick={(e)=> e.stopPropagation()}>
        <p>Rename Board</p>
        <hr/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.title} onChange={this.handleChange.bind(this)} type="text" />
          <input type="submit" value="Update"/>
        </form>
      </div>
    );
  }
}




export default RenameBoard;
