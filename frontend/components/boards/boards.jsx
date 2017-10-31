import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import BoardIndexContainer from './board_index_container';
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
        <div className="main" onClick={() => this.props.hideDropdown()}>
          <NavbarContainer/>
          <h1>logged {this.props.currentUser.username}</h1>
          <button onClick={this.handleLogout.bind(this)}>Log out</button>
          <BoardIndexContainer/>
        </div>
      );

    }else {
      return null;
    }
  }
}
export default Boards;
