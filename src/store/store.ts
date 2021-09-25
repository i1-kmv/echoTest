import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./auth-reducer"
import {registerReducer} from "./registration-reducer"
import {recoveryReducer} from "./recovery-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    recovery: recoveryReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>