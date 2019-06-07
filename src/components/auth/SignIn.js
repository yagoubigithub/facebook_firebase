import React, { Component } from "react";
import {
  Grid,
  Button,
  Input,
  Dialog,
  CircularProgress,
  DialogContent
} from "@material-ui/core";

import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";


class SignIn extends Component {
  state = {
    progress: false
  };

  handelClick = () => {
    const email = this.email.value;
    const password = this.password.value;
    this.props.deleteAuthErr();
    this.setState({progress : true});
    this.props.signIn(email, password);

  };
  
  render() {
    const { authErr } = this.props;
    
  
    return (
      <React.Fragment>
        <Dialog disableBackdropClick disableEscapeKeyDown open={authErr ? false : this.state.progress}>
          <DialogContent>
            <CircularProgress color="secondary" />
          </DialogContent>
        </Dialog>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <input
                ref={input => (this.email = input)}
                className="login-input"
                type="email"
                name="email"
              />
            </Grid>
            <Grid item xs={4}>
              <input
                ref={input => (this.password = input)}
                className="login-input"
                type="password"
                name="password"
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={this.handelClick}
                size="small"
                variant="contained"
              >
                Connexion
              </Button>
            </Grid>
          </Grid>
          <span style={{ color: "#F77" }}>{authErr ? authErr : " "}</span>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authErr: state.auth.authErr
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    deleteAuthErr : ()=>dispatch({type : "DELETE_AUTH_ERROR"})
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
