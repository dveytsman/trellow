import React from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from './user_dropdown';
class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.loggedIn){
      const { currentUser, logout } = this.props;
      return(
        <div className="navbar">
          <div>
            <h3>I am a navbar</h3>
          </div>
          <div><Link to="/">trellow</Link></div>
          <div class="dropdown">
            <UserDropDown currentUser={ currentUser } logout={ logout }/>
          </div>
        </div>
      );
    }else {
      return null;
    }
  }
}

export default Navbar;
