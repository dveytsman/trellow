import React from 'react';

class ListIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const listsIndex = this.props.lists.map(list => {
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
