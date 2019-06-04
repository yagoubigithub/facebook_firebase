import React, { Component } from "react";
import { Grid, Button, Input } from "@material-ui/core";

import {signIn} from '../../store/actions/authActions';
import {connect} from 'react-redux';
class SignIn extends Component {
  state = {};
  
  handelClick = () =>{
    this.props.signIn("yagoubi.ae.2@gmail.com", "yagoubi10");

  }
  render() {
    const {authErr} = this.props;
    return (
      <React.Fragment>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <input className="login-input" type="email" name="email" />
            </Grid>
            <Grid item xs={4}>
              <input className="login-input" type="password" name="password" />
            </Grid>
            <Grid item xs={4}>
              <Button onClick={this.handelClick}  size="small" variant="contained" >Connexion</Button>
            </Grid>
            {authErr ? authErr : null}
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    authErr : state.auth.authErr
  }
}
const mapDispatchToProps = (dispatch)=>{

  
  return {
    signIn : (email,password)=>dispatch(signIn(email,password))

  }
}
export default connect(null,mapDispatchToProps)(SignIn);
