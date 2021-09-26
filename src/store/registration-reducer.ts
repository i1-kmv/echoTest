import {Dispatch} from "redux";
import {formApi} from "../api/form-api";
import {setAppErrorAC} from "./auth-reducer";

const initialState = {
    authMode: false,
    setNewUserModeAC: false,
    user: {
        phone: '',
        password: '',
        first_name: '',
        avatar: ''
    }
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'register/SET-AUTH-NODE':
            return {...state, authMode: action.value}
        case 'register/SET-NEW-USER':
            return {...state, user: {phone : action.phone, password: action.password, first_name: action.first_name, avatar:action.avatar}}
        default:
            return state
    }
}


export const setAuthModeAC = (value: boolean) => ({type: 'register/SET-AUTH-NODE', value} as const)
export const setNewUserModeAC = (value: boolean) => ({type: 'register/SET-NEW-USER-NODE', value} as const)
export const setUserAC = (phone: string, password: string, first_name:string, avatar:string) => ({type: 'register/SET-NEW-USER', phone, password, first_name,avatar} as const)


export const registerTC = (phone: string, password: string, first_name:string, avatar:string) => (dispatch: Dispatch) => {
    formApi.register_mock(phone, password, first_name, avatar)
        .then(res => {
            dispatch(setNewUserModeAC(true))
        }).catch(err => {
        dispatch(setUserAC(phone, password, first_name, avatar))
        dispatch(setAppErrorAC(err))
    })
}


type ActionsType = ReturnType<typeof setAuthModeAC> | ReturnType<typeof setUserAC> |  ReturnType<typeof setNewUserModeAC>

type InitialStateType = typeof initialState