import React, { Component } from "react";
import { Typography, TextField, Radio, RadioGroup, FormControlLabel, Button, Dialog,
  CircularProgress,
  DialogContent } from "@material-ui/core";

import MomentUtils from '@date-io/moment'; // choose your lib
import {
  DatePicker,
 
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";


import {connect} from 'react-redux';

import { signUp } from "../../store/actions/authActions";
class SignUp extends Component {
  state = {
    user: {
      gender : 'male',
    firstname : '',
    lastname : '',
    birthday :  new Date().toString(),
    email : '',
    password :  '',
    dateSignUp :  '',
    }
    ,
    progress: false
    
  };

  isEmpty = (string) =>{
    return string === "";

  }
  handelClick = (e) =>{

e.preventDefault();

    
this.props.deleteSignUpErr();
this.setState({progress : true});
    const user = this.state.user;
    user.dateSignUp = new Date().toString();
    this.setState({user})
    this.props.signUp(this.state.user);
    
  }
  handelChange =(e)=>{

    const user = {...this.state.user};
    user[e.target.id] = e.target.value;
    this.setState({user});

  }
  handelChangegender = (e)=>{

    const user = {...this.state.user};
    user.gender = e.target.value;
    this.setState({user});

  }
  handleDateChange =(selectDate)=>{
    const user = {...this.state.user};
    user.birthday = selectDate.toString();
    this.setState({user});
  }
  render() {
    const {signUpErr} = this.props;
    return (
      <div style={{ padding: 5 }}>
       <Dialog disableBackdropClick disableEscapeKeyDown open={signUpErr ? false : this.state.progress}>
          <DialogContent>
            <CircularProgress color="secondary" />
          </DialogContent>
        </Dialog>

        <Typography variant="h3" >
          Create New Account
        </Typography>
        <Typography variant="h6" gutterBottom color="textSecondary">
          It’s free and always will be.
        </Typography>
        <Typography variant="caption" gutterBottom color="error">
         {signUpErr ? signUpErr : " "}
        </Typography>
        <form  onSubmit={this.handelClick} autoComplete="off">
          <TextField
            style={{ width: "49%" }}
            className="signup-input"
            margin="dense"
            variant="outlined"
            placeholder="First Name"
           id="firstname"
           onChange={this.handelChange}
           required
          />
          <TextField
            style={{ marginLeft: 5, width: "49%" }}
            className="signup-input"
            margin="dense"
            variant="outlined"
            placeholder="Last Name"
            id="lastname"
            onChange={this.handelChange}
            required
          />
          <TextField
            className="signup-input"
            margin="dense"
            variant="outlined"
            fullWidth
            placeholder="Eamil or phone number"
            id="email"
            onChange={this.handelChange}
            required
          />
          <TextField
            className="signup-input"
            margin="dense"
            variant="outlined"
            fullWidth
            placeholder="New Password"
            id="password"
            onChange={this.handelChange}
            required
            type="password"
          />
          <Typography variant="h6" gutterBottom>
            Birthday
          </Typography>
          <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            style={{ width: "49%" }}
            className="signup-input"
            disableFuture
            
        openTo="year"
        format="DD/MM/YYYY"
        label="Date of birth"
        value={this.state.user.birthday}
        views={["year", "month", "date"]}
            id="birthday"
            onChange={this.handleDateChange}
            required
          />
          </MuiPickersUtilsProvider>
          
          <Typography variant="h6" gutterBottom>
            Gender
          </Typography>
          <RadioGroup
          aria-label="Gender"
          defaultValue="male"
          row={true}
          onChange={this.handelChangegender}
          
        >
          <FormControlLabel  value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          
        </RadioGroup>
        <Typography variant="caption" color="textSecondary">
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
        </Typography>
        <br /> <br />
        <Button type="submit"  variant="contained" color="primary" size="large" >Sign Up</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    signUpErr :  state.auth.signUpErr
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signUp : (newUser) =>dispatch(signUp(newUser)),
    deleteSignUpErr : ()=>dispatch({type : "DELETE_SIGNUP_ERROR"})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
