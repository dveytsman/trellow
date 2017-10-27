import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.loggedIn){
      return(
        <div className="navbar">
          <h3>I am a navbar</h3>
        </div>
      );
    }else {
      return null;
    }
  }
}

export default Navbar;
