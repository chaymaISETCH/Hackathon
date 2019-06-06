//***********************challenge *************/
export const ADD_CHALLENGE = "ADD_CHALLENGE"
export const DELETE_CHALLENGE ="DELETE_CHALLENGE"
export const EDIT_CHALLENGE ="EDIT_CHALLENGE"
export const GET_ALL_CHALLENGE = "GET_ALL_CHALLENGE"
export const FILTER_BY_TITLE  = "FILTER_BY_TITLE"
export const SET_RESULT = "SET_RESULT"
export const filterByTitle = title =>({type : FILTER_BY_TITLE, title})

export const setResult = result =>({type : SET_RESULT, result})


export const addChallenge=(challenge)=>{
    return {type : ADD_CHALLENGE,challenge}
}
export const getAllChallenges=(challenges)=>{
    return {type : GET_ALL_CHALLENGE,challenges}
}
export const deleteChallenge=(_id)=>{
    return {type : DELETE_CHALLENGE,_id}
}
export const editChallenge=(challenge)=>{
    return {type : EDIT_CHALLENGE,challenge}
}

//************************User ***********/
export const TOGGLE_SHOW ="TOGGLE_SHOW"
export const AUTHENTICATED = "AUTHENTICATED" 
export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB"
export const TOGGLE_NESTED_MENU ="TOGGLE_NESTED_MENU"
//show or hide modal sign up sign in
export const toggleShow=()=>{
    return {type : TOGGLE_SHOW}
}
export const toggleNestedMenu=()=>{
    return {type:TOGGLE_NESTED_MENU}
}
export const authenticated = (isAuthenticated) => {
    return {type : AUTHENTICATED,isAuthenticated}
}
export const setCurrentUser = (user) => {
    return {type : SET_CURRENT_USER,user}
}
export const changeActiveTab = (tab) => {
    return {type : CHANGE_ACTIVE_TAB,tab}
}