import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Landing extends React.Component{
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
        <div className='landing'>
          <form onSubmit={this.handleLogin} className="landing-login">
            <h1>Welcome back to Trellow!</h1>
            <br/>
            <h1>Log in to Trellow</h1>
            <div className="landing-login-form">
              <br/>
              <label>Username
                <br/>
                <input type='text' value={this.state.username}
                  onChange={this.update('username')} className="landing-login-input"/>
                <br/>
              </label>
              <br/>
              <label>Password
                <br/>
                <input type="password" value={this.state.password}
                  onChange={this.update('password')} className="landing-login-input"/>
              </label>
              <br/>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      );

    }
    return null;
  }
}


export default Landing;
