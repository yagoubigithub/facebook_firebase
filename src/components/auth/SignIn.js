import React, { Component } from "react";
import { Grid, Button, Input } from "@material-ui/core";

import {display} from '../../store/actions/authActions';
import {connect} from 'react-redux';
class SignIn extends Component {
  state = {};
  componentDidMount = () =>{
    this.props.display();
  }
  render() {
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
              <Button  size="small" variant="contained" >Connexion</Button>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
console.log('mapToProps', dispatch);
  return {
    display : ()=>dispatch(display())

  }
}
export default connect(null,mapDispatchToProps)(SignIn);
