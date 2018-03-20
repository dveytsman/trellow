import React from 'react';


class UpdateList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.list ? props.list.title : '',
    };

  }
  handleChange(e){
    e.stopPropagation();
    this.setState({title: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.updateList({
      title: this.state.title,
      board_id: this.props.board.id,
      id: this.props.list.id
    });
    this.setState({title: ''});
    this.props.showDropdown("");
  }


  render(){
    return(
      <div className="create-list-container" onClick={(e)=> e.stopPropagation()}>
        <p id="create-list-text3">Createy List</p>
        <form className='creation-form' onSubmit={this.handleSubmit.bind(this)}>
          <h3>Title</h3>
          <input autoFocus className='creation-input' value={this.state.title} onChange={this.handleChange.bind(this)} type="text" placeholder="Rename List"/>
          <input className='creation-submit' type="submit" value="Rename"/>
        </form>
      </div>
    );
  }
}




export default UpdateList;
