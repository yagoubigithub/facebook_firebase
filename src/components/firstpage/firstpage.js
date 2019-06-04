import React, { Component } from "react";
import Navbar from "./Navbar";
import { Grid } from "@material-ui/core";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";

class FirstPage extends Component {
  state = {};
  render() {
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

export default FirstPage;
