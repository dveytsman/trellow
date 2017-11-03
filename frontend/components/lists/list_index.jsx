import React from 'react';

class ListIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let content = (this.props.lists === null) ? [] : this.props.lists;
    const listsIndex = content.map(list => {
      return(
        <li
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
