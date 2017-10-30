import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserDropDown from './user_dropdown';
import {showDropdown } from '../../actions/dropdown_actions';
class Navbar extends React.Component{
  constructor(props){
    super(props);
    // this.state = this.props;
  }
  toggleDropDown(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.showDropdown();
    // this.setState({
    //   dropdownVisible: true
    // });
    }
    handleLinkClick(e){
      e.preventDefault();
      // Redirect to='/';

    }
    render(){
    if(this.props.loggedIn && this.props.dropdownVisible){
      const { currentUser, logout } = this.props;
      return(
        <div className="navbar">
          <div>
            <h3>Boards</h3>
          </div>
          <a href="/">
            <div onClick={this.handleLinkClick.bind(this)} className="nav-image"><Link to="/"></Link></div>
          </a>
          <div className="dropdown-visible">
            {currentUser.username.slice(0,2).toUpperCase()}
            <div className="dropdown">
              <UserDropDown currentUser={ currentUser } logout={ logout }/>
            </div>
          </div>
        </div>
      );
    }else if(this.props.loggedIn && !this.props.dropdownVisible){
      const { currentUser, logout } = this.props;
      return(
        <div className="navbar">
          <div>
            <h3>Boards</h3>
          </div>
          <a href="/">
            <div onClick={this.handleLinkClick.bind(this)} className="nav-image"><Link to="/"></Link></div>
          </a>
          <div onClick={this.toggleDropDown.bind(this)} className="dropdown-visible">
            {currentUser.username.slice(0,2).toUpperCase()}
          </div>
        </div>
      );

    }else{
      return null;
    }
  }
}


export default Navbar;
