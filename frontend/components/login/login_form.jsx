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
    this.setState({username:'', password:''});
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
        <div className='login'>
          <form onSubmit={this.handleLogin} className="login-form">
            <div>
              <h1>Log in to Trellow</h1>
            </div>
            <div className="login-form-errors">
              {this.renderErrors()}
            </div>
            <div>
              <label className="login-username-form">Username</label>
            </div>
            <div>
              <input className="login-input" type='text' value={this.state.username}
                onChange={this.update('username')}/>
            </div>
            <div>
              <label className="login-password-form">Password</label>
            </div>
            <div>
              <input className="login-input" type="password" value={this.state.password}
                onChange={this.update('password')}/>
            </div>
            <div>
              <input className="login-form-button" type="submit" value="Log In" />
            </div>
          </form>
        </div>
      );
    }
    return null;
  }
}


export default LoginForm;
