import React, { Component } from 'react';
 

class SignIn extends Component {
    state = {  }
    render() { 
        return (  <React.Fragment>
            <form>
                <input type="email" name="email" />
                <input type="password" name="password" />
                <button >Connexion</button>
            </form>
        </React.Fragment>);
    }
}
 
export default SignIn;