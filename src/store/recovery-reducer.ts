import {formApi} from "../api/form-api"
import {setAppErrorAC, setAppIsInitializedAC} from "./auth-reducer"
import {FormikErrorType} from "../pages/Auth"
import {Dispatch} from "redux"


const initialState = {
    phoneConfirm: false,
    smsConfirm: false
}


export const recoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'confirm/SET-PHONE-CONFIRM':
            return {...state, phoneConfirm: action.value}
        case 'confirm/SET-SMS-CONFIRM':
            return {...state, smsConfirm: action.value}
        default:
            return state
    }
}


export const setPhoneConfirmAC = (value: boolean) => ({type: 'confirm/SET-PHONE-CONFIRM', value} as const)
export const setSmsConfirmAC = (value: boolean) => ({type: 'confirm/SET-SMS-CONFIRM', value} as const)


export const confirmPhoneTC = (data: FormikErrorType) => (dispatch: Dispatch) => {
    console.log(data)
    formApi.confirm_phone_mock(data)
        .then(res => {
            dispatch(setPhoneConfirmAC(true))
        }).catch(err => {
            console.log('reg')
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })
}

export const confirmSmsTC = (data: FormikErrorType) => (dispatch: Dispatch) => {
    formApi.confirm_sms_mock(data)
        .then(res => {
            dispatch(setSmsConfirmAC(true))
        }).catch(err => {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })
}


type ActionsType = ReturnType<typeof setPhoneConfirmAC> | ReturnType<typeof setSmsConfirmAC>

type InitialStateType = typeof initialState