import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
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

  render(){
    return(
      <div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <h1>Welcome back to Trellow</h1>
            <h1>Log in to Trellow</h1>
            <div className="login-form">
              <br/>
                {this.renderErrors()}

              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input type="submit" value="Submit" />
            </div>
          </form>

      </div>
    );
  }
}

export default withRouter(Landing);
