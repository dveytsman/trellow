import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component{
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
    this.props.signup({user});
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
        <div className='sign-up'>
          <form onSubmit={this.handleLogin} className="login">
            <br/>
            <h1>Create a Trellow Account</h1>
            <div className="login-form">
              {this.renderErrors()}
              <br/>
              <label>Username
                <br/>
                <input type='text' value={this.state.username}
                  onChange={this.update('username')} className="login-input"/>
                <br/>
              </label>
              <br/>
              <label>Password
                <br/>
                <input type="password" value={this.state.password}
                  onChange={this.update('password')} className="login-input"/>
              </label>
              <br/>
              <input type="submit" value="Sign up!" />
            </div>
          </form>
        </div>
      );

    }
    return null;
  }
}


export default SignupForm;
