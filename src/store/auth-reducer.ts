import {Dispatch} from "redux"
import {formApi} from "../api/form-api"
import { FormikErrorType } from "../pages/Auth"

const initialState = {
    isLoggedIn: false,
    registerMode: false,
    isInitialized: false,
    passwordRecoveryMode: false,
    error: null as string | null,
    authPhone: ''
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'login/SET-REGISTER-MODE':
            return {...state, registerMode: action.value}
        case 'login/SET-PASSWORD-RECOVERY-MODE':
            return {...state, passwordRecoveryMode: action.value}
        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.value}
        case "APP/SET-AUTH-PHONE":
            return {...state, authPhone: action.value}
        default:
            return state
    }
}

export const loginTC = (data: FormikErrorType) => (dispatch: Dispatch) => {
    formApi.login_mock(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
        }).catch(err => {
        dispatch(setAppErrorAC(err))
        dispatch(setAppIsInitializedAC(true))
    })
}

export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setRegisterModeAC = (value: boolean) => ({type: 'login/SET-REGISTER-MODE', value} as const)
export const setPasswordRecoveryModeAC = (value: boolean) => ({type: 'login/SET-PASSWORD-RECOVERY-MODE', value} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppIsInitializedAC = (value: boolean) => ({type: 'APP/SET-IS-INITIALIZED', value} as const)
export const setAuthPhoneAC = (value: string) => ({type: 'APP/SET-AUTH-PHONE', value} as const)


type ActionsType =
    ReturnType<typeof setIsLoggedInAC> |
    ReturnType<typeof setRegisterModeAC> |
    ReturnType<typeof setPasswordRecoveryModeAC> |
    ReturnType<typeof setAppErrorAC> |
    ReturnType<typeof setAppIsInitializedAC> |
    ReturnType<typeof setAuthPhoneAC>

type InitialStateType = typeof initialState