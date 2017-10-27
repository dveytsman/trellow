import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillReceiveProps(){
    // this.setState({username:'', password:''});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleLogin(e){
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if(!this.props.loggedIn){
      return(
        <div className="login-page">

        <div className='login'>
          <form onSubmit={this.handleLogin} className="login-form">
            <div className="login-h1">
              <p className="heading">Log in to Trellow</p>
              <div className="login-form-errors">
                {this.renderErrors()}
              </div>
              <div>
                <label htmlFor="username" className="login-username-form">Username</label>
              </div>
              <div>
                <input name="username" className="login-input" type='text' value={this.state.username}
                  onChange={this.update('username')}placeholder="e.g., captainpicard"/>
              </div>
              <div>
                <label htmlFor="password" className="login-password-form">Password</label>
              </div>
              <div>
                <input name="password" className="login-input" type="password" value={this.state.password}
                  onChange={this.update('password')} placeholder="e.g., •••••••"/>
              </div>
              <div>
                <input className="login-form-button" type="submit" value="Log In" />
              </div>
              <div className="link-to">
                Don't have and account? <Link to="/signup">Create a Trellow Account</Link>
              </div>
            </div>
          </form>
          <footer>
            <div>
              <p className="copyright">© Copyright 2017, Trellow, Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
      );
    }

    return null;
  }
}


export default LoginForm;
