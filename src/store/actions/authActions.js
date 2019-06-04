export const display = () =>{
    return (dispatch,getState, {getFirebase,getFirestore})=>{
       const firestore  = getFirestore();
       firestore.collection('users').add({
           name : "hello world"
       }).then(()=>{
        dispatch({type : "display"});
       })
       
    }
}