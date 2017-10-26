import React from 'react';

class Boards extends React.Component{
  constructor(props){
    super(props);
  }



handleLogout(e){
  e.preventDefault();
  this.props.logout();
}


  render(){
    if(this.props.loggedIn){
      return(
        <div>
          <h1>logged</h1>
          <button onClick={this.handleLogout.bind(this)}>Log out</button>
        </div>
      );

    }else {
      return null;
    }
  }
}
export default Boards;
