import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      age:'',
      email: ''

    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // login to retrieve the JWT tokenyarn
    // add the token to localstorage
    // route to /protected (whatever landing page)
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder='User Name'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder= 'Password...'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          {/* <input
            type="text"
            name="age"
            value={this.state.credentials.age}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="username"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          /> */}
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
