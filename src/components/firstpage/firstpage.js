import React, { Component } from "react";
import Navbar from "./Navbar";
import { Grid } from "@material-ui/core";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class FirstPage extends Component {
  state = {};
  render() {
      const {auth} = this.props;
      if(auth.uid) return <Redirect to='home' /> 
    return (
      <div>
        <Navbar />
        <Grid container>
          <Grid item md={6} />
          <Grid item md={6}>
            <SignUp />
          </Grid>
        </Grid>
        <Dashboard />
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
    
    return {
        auth : state.firebase.auth

    };
}
export default connect(mapStateToProps)(FirstPage);
