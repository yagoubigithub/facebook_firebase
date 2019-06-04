import React, { Component } from "react";
import { Typography, TextField, Radio, RadioGroup, FormControlLabel, Button } from "@material-ui/core";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: 5 }}>
        <Typography variant="h3" >
          Create New Account
        </Typography>
        <Typography variant="h6" gutterBottom color="textSecondary">
          It’s free and always will be.
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            style={{ width: "49%" }}
            className="signup-input"
            margin="dense"
            variant="outlined"
            placeholder="First Name"
          />
          <TextField
            style={{ marginLeft: 5, width: "49%" }}
            className="signup-input"
            margin="dense"
            variant="outlined"
            placeholder="Last Name"
          />
          <TextField
            className="signup-input"
            margin="dense"
            variant="outlined"
            fullWidth
            placeholder="Eamil or phone number"
          />
          <TextField
            className="signup-input"
            margin="dense"
            variant="outlined"
            fullWidth
            placeholder="New Password"
          />
          <Typography variant="h6" gutterBottom>
            Birthday
          </Typography>
          <TextField
            style={{ width: "49%" }}
            className="signup-input"
            margin="dense"
            variant="outlined"
            type="date"
            
          />
          <Typography variant="h6" gutterBottom>
            Gender
          </Typography>
          <RadioGroup
          aria-label="Gender"
          name="gender1"
          row={true}
          value="male"
        
        >
          <FormControlLabel  value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          
        </RadioGroup>
        <Typography variant="caption" color="textSecondary">
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
        </Typography>
        <br /> <br />
        <Button  variant="contained" color="primary" size="large" >Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
