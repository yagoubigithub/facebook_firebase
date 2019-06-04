import React, { Component } from "react";
import SignIn from "../auth/SignIn";
import { Grid ,Hidden } from "@material-ui/core";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <Grid container>
        <Hidden xsDown>
        <Grid item md={7} sm={4}>
            <h1>Facebook</h1>
          </Grid>
        </Hidden>
         
          <Grid item>
            <SignIn />
          </Grid>
        </Grid>
      </nav>
    );
  }
}

export default Navbar;
