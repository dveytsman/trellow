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
    e.target.childNodes[0].blur();
  }


  render(){
    return(
      <div className="" onClick={(e)=> e.stopPropagation()}>

        <form className='' onSubmit={this.handleSubmit.bind(this)}>
          <input className='text-list'  onChange={this.handleChange.bind(this)} type="textarea" placeholder={this.props.list.title}/>

        </form>
      </div>
    );
  }
}




export default UpdateList;
