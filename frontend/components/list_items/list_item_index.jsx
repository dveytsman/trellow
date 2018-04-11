import React from 'react';
import { Link } from 'react-router-dom';

class ListItemIndex extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {title: ''};
  }
  componentWillReceiveProps(ownProps){

  }
  handleDelete(e){
    e.preventDefault();
    this.props.deleteListItem(Number(e.target.id), this.props.list.id);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.createListItem({title: this.state.title, list_id: this.props.list.id}, this.props.list.board_id);
    this.setState({title: ''});
  }
  render(){
        var cards = (this.props.list.cards === undefined) ? [] : Object.values(this.props.list.cards);
    var cardsIndex = cards.map(card => (
      <li onClick={this.handleDelete} key={card.id} className="card">{card.title}<div id={card.id} className="x" >x</div></li>
    ));
    return(
      <ul className="cards">
          {cardsIndex}
          <li>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} type="text" value={this.state.title}/>
            </form>
            </li>
      </ul>
    )

  }
}
export default ListItemIndex;
