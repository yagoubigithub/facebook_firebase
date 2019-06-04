import React from 'react';

import './App.css';
import Navbar from './components/firstpage/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import { Grid } from '@material-ui/core';
import SignUp from './components/auth/SignUp';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import FirstPage from './components/firstpage/firstpage';

function App() {
  return (
    <BrowserRouter>

<div >

<Switch>
  <Route path='/' component={FirstPage} />
</Switch>

</div>
    </BrowserRouter>
    
  );
}

export default App;
