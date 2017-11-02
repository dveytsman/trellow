import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserDropDown from './user_dropdown';
import {showDropdown } from '../../actions/dropdown_actions';
import BoardDropdownContainer from './boards_dropdown_container';
import DropdownContainer from './dropdown_container';
class Navbar extends React.Component{
  constructor(props){
    super(props);
    // this.state = this.props;
    this.toggleDropDown.bind(this);
  }
  toggleDropDown(name){
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
    this.props.showDropdown(name);
    // this.setState({
    //   dropdownVisible: true
    // });
  };
  }
    handleLinkClick(e){
      e.preventDefault();
      // Redirect to='/';

    }
    render(){
    if(this.props.loggedIn){
      const { currentUser, logout } = this.props;
      return(
        <div className="navbar">
          <div onClick={this.toggleDropDown('leftDown')} className="leftDown-visible">
            <h3>Boards</h3>
            <div>
              <DropdownContainer name="leftDown">
                <BoardDropdownContainer />
              </DropdownContainer>
            </div>
          </div>
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
