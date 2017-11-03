import React from 'react';

class ListIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    var content = (this.props.lists === null) ? [] : this.props.lists;

    const listsIndex = content.map(list => {
      if(list === undefined){
        return '';
      }
      return(
        <li key={list.id}
          className="list-items">{list.title}
        </li>
      );
    });
    return(
      <div>
        <ul>
          {listsIndex}
        </ul>
      </div>
    );
  }
}

export default ListIndex;
