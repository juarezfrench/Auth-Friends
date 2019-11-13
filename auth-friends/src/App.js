import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendsPage from './components/FriendsPage'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login-form">LoginForm</Link>
          </li>
          <li>
            <Link to="/protected">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={FriendsPage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
