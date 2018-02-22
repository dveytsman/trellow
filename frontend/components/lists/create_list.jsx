import React from 'react';


class CreateList extends React.Component{
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
    this.props.createList({title: this.state.title, board_id: this.props.board.id});
    this.setState({title: ''});
    this.props.showDropdown("");
  }


  render(){
    return(
      <div className="create-list-container" onClick={(e)=> e.stopPropagation()}>
        <p>Create List</p>
        <form className='creation-form' onSubmit={this.handleSubmit.bind(this)}>
          <h3>Title</h3>
          <input className='creation-input' value={this.state.title} onChange={this.handleChange.bind(this)} type="text" placeholder="Create List Name"/>
          <input className='creation-submit' type="submit" value="Create"/>
        </form>
      </div>
    );
  }
}




export default CreateList;
