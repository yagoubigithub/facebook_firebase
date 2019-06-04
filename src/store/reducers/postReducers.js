const initStat = {

}
 const postReducer = (state = initStat, action) =>{

    switch (action.type) {
        case 'post':
            console.log(state);
            return state;
           
    
        default:
            return state;
            break;
    }
}
export default postReducer;