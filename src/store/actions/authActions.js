export const signIn = (email,password) =>{
    return (dispatch,getState, {getFirebase,getFirestore})=>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            email,
            password
        ).then(()=>{
           
            dispatch({type : 'LOGIN_SUCCESS'});
            
        }).catch((err)=>{
            dispatch({type : 'LOGIN_ERROR', err});

        });
       
    }
}

export const signOut = () =>{
    return (dispatch,getState, {getFirebase,getFirestore})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type : 'SIGNOUT_SUCCESS'})

        })
       
    }
}

export const signUp = (newUser) =>{
    return (dispatch,getState, {getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
    
        firebase.auth().createUserWithEmailAndPassword(
          newUser.email, 
          newUser.password
        ).then(resp => {
            console.log(resp);
          return firestore.collection('users').doc(resp.user.uid).set({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            birthday: newUser.birthday,
            gender: newUser.gender,
            initials: newUser.firstname[0] + newUser.lastname[0],
            gender : newUser.gender,
            dateSignUp : newUser.dateSignUp
          });
        }).then(() => {
          dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
          dispatch({ type: 'SIGNUP_ERROR', err});
        });

    }
}