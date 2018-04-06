import React from 'react';
import { Link } from 'react-router-dom';

class ListItemIndex extends React.Component{
  constructor(props){
    super(props);

  }
  componentWillReceiveProps(ownProps){

  }
  render(){
        var cards = (this.props.list.card === undefined) ? [] : Object.values(this.props.list.card);
    var cardsIndex = cards.map(card => (
      <li key={card.id} className="card">{card.title}</li>
    ));
    return(
      <ul className="cards">
          {cardsIndex}
      </ul>
    )

  }
}
export default ListItemIndex;
