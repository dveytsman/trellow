import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div class="landing-bar">
    <div className="landing-image">

    </div>
    <nav id="login-signup">
      <Link class="login-button" to="/login">Login</Link>
      &nbsp; &nbsp;
      <Link class="signup-button" to="/signup">Sign Up</Link>
    </nav>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

 const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
