import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import {connect} from 'react-redux';

import {signOut}  from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='' /> 
        
        return ( 
            <div>
                <Button onClick={this.props.signOut} >Logout</Button>
            </div>
         );
    }
}

const mapStateToProps = (state) =>{
    
    return {
        auth : state.firebase.auth

    };
}

const mapDispatchToProps = (dispatch) =>{

    return {

        signOut  : ()=>dispatch(signOut())

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);