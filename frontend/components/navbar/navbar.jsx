import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserDropDown from './user_dropdown';
import {showDropdown } from '../../actions/dropdown_actions';
import BoardDropdownContainer from './boards_dropdown_container';
import DropdownContainer from './dropdown_container';
class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.toggleDropDown.bind(this);
  }
  toggleDropDown(name){
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
    this.props.showDropdown(name);
  };
  }
    handleLinkClick(e){
      e.preventDefault();
    }
    render(){
    if(this.props.loggedIn){
      const { currentUser, logout } = this.props;
      return(
        <div className="navbar">
            <Link to="/boards" className="leftDown-visible">
              Boards
              <div></div>
            </Link>

          <Link to="/boards">
            <div className="nav-image"></div>
          </Link>
          <div onClick={this.toggleDropDown("dropdown")} className="dropdown-visible">
            {currentUser.username.slice(0,2).toUpperCase()}
            <DropdownContainer name="dropdown">
              <UserDropDown currentUser={ currentUser } logout={ logout }/>
            </DropdownContainer>

          </div>
        </div>
      );


    }else{
      return null;
    }
  }
}


export default Navbar;
