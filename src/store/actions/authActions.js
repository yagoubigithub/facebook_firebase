export const display = () =>{
    return (dispatch,getState)=>{
        console.log("hello world");
        dispatch({type : "display"});
    }
}