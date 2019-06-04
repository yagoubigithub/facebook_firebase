import React from 'react';

import './App.css';
import Navbar from './components/firstpage/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import { Grid } from '@material-ui/core';
import SignUp from './components/auth/SignUp';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import FirstPage from './components/firstpage/firstpage';
import Home from './components/dashboard/home';

function App() {
  return (
    <BrowserRouter>

<div >

<Switch>
  <Route exact path='/' component={FirstPage} />
  <Route path='/home' component={Home} />
</Switch>

</div>
    </BrowserRouter>
    
  );
}

export default App;
