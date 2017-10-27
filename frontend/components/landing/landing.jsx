import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
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
    this.props.login({user}).then(() => this.setState({username: '', password: ''}));
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
          <header>
            <GreetingContainer />
          </header>
          <form onSubmit={this.handleLogin} className="landing-login">
            <h1>Welcome back to Trellow!</h1>
            <br/>
            <h1>Log in to Trellow</h1>
            <div className="landing-login-form">
              {this.renderErrors()}
              <br/>
              <label className="landing-username">Username
                <br/>
                <input className="landing-input" type='text' value={this.state.username}
                  onChange={this.update('username')} className="landing-login-input"
                  placeholder='e.g., LukeSkywalker'/>
                <br/>
              </label>
              <br/>
              <label className="landing-password">Password
                <br/>
                <input className="landing-input" type="password" value={this.state.password}
                  onChange={this.update('password')} className="landing-login-input"
                  placeholder='e.g., ••••••'/>
              </label>
              <br/>
              <br/>
              <input id="landing-button" className="landing-main-button" type="submit" value="Log In" />
            </div>
          </form>
        </div>
      );

    }
    return null;
  }
}


export default Landing;
