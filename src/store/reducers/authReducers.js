const initStat = {

}
const authReducer = (state = initStat, action) =>{

    switch (action.type) {
        case 'display':
            console.log(state);
            return state;
           
    
        default:
            return state;
            
    }
    
}
export default authReducer;