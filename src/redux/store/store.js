import {createStore} from "redux"
import challenge from "../reducers/challengeReducer"
import user from "../reducers/userReducer"
import {combineReducers} from "redux"

export default createStore(combineReducers({challenge,user}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())