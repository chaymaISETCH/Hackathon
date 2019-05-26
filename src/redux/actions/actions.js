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

