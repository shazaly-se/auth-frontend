import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="">
     <Router>
     <Switch>
       <PublicRoute path="/register" component={Register}  />
       <PrivateRoute path="/profiles" component={Home}  />
       <PublicRoute path="/" component={Login} exact />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
