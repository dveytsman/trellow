import React from 'react';
import { Link } from 'react-router-dom';
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
  render(){
    if(this.props.loggedIn && this.props.dropdownVisible){
      const { currentUser, logout } = this.props;
      return(
        <div className="navbar">
          <div>
            <h3>I am a navbar</h3>
          </div>
          <div><Link to="/">trellow</Link></div>
          <div className="dropdown">
            <UserDropDown currentUser={ currentUser } logout={ logout }/>
          </div>
        </div>
      );
    }else if(this.props.loggedIn && !this.props.dropdownVisible){
      const { currentUser, logout } = this.props;
      return(
        <div className="navbar">
          <div>
            <h3>I am a navbar</h3>
          </div>
          <div><Link to="/">trellow</Link></div>
          <div onClick={this.toggleDropDown.bind(this)} className="dropdown">
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
