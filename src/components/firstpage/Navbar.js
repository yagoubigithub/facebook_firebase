import React, { Component } from "react";
import SignIn from "../auth/SignIn";
import { Grid, Hidden } from "@material-ui/core";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <Grid container>
          <Hidden smDown>
            <Grid item md={6}>
              <h1 className="fb_title_name">Facebook</h1>
            </Grid>
          </Hidden>
          <Hidden mdUp xsDown>
            <Grid item sm={2}>
              <h1 className="fb_title_name">Fb</h1>
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
