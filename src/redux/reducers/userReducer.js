import {TOGGLE_SHOW, SET_CURRENT_USER,CHANGE_ACTIVE_TAB,AUTHENTICATED} from "../actions/actions"


const userReducer = (state={show : false,activeTab:"2",isAuthenticated:false},action)=>{

switch(action.type){
    case TOGGLE_SHOW : return {...state,show:!state.show}
    case CHANGE_ACTIVE_TAB : return {...state,activeTab:action.tab}
    case AUTHENTICATED : {
        console.log("auth")
        return {...state, isAuthenticated: action.isAuthenticated}}
    case SET_CURRENT_USER :{
        console.log(action)
    return {...state,user:action.user}}
    default: return state
}

}

export default userReducer