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
    e.target.childNodes[0].blur();
    var form = document.getElementById('testing');
    form.reset();
    var inp = document.getElementById('list');
    inp.value = '';
  }


  render(){
    return(
      <div className="" onClick={(e)=> e.stopPropagation()}>

        <form id="testing" className='' onSubmit={this.handleSubmit.bind(this)}>
          <input id="list" className='text-list'  onChange={this.handleChange.bind(this)} type="textarea" placeholder={this.props.list.title}/>

        </form>
      </div>
    );
  }
}




export default UpdateList;
