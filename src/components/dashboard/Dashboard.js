import React, { Component } from 'react';
import SignUp from '../auth/SignUp';
import { Grid } from '@material-ui/core';
class Dashboard extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{backgroundColor :  'rgb(233,235,238)'}}>
            <Grid  container>

<Grid item md={6}>

</Grid>
<Grid item md={6}>
<SignUp />
</Grid>
            </Grid>
             
            </div>
        );
    }
}
 
export default Dashboard;