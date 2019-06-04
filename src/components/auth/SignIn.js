import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class SignIn extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form>
          <Grid container>
            <Grid item xs={4}>
              <input type="email" name="email" />
            </Grid>
            <Grid item xs={4}>
              <input type="password" name="password" />
            </Grid>
            <Grid item xs={4}>
              <button>Connexion</button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

export default SignIn;
