import {formApi} from "../api/form-api";
import {setAppErrorAC} from "./auth-reducer";
import {FormikErrorType} from "../pages/Auth";
import {Dispatch} from "redux";

const initialState = {
    phoneConfirm: false,
}

export const recoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'confirm/SET-PHONE-CONFIRM':
            return {...state, phoneConfirm: action.value}
        default:
            return state
    }
}


export const setPhoneConfirmAC = (value: boolean) => ({type: 'confirm/SET-PHONE-CONFIRM', value} as const)

export const confirmPhoneTC = (data: FormikErrorType) => (dispatch: Dispatch) => {
    formApi.confirm_phone_mock(data)
        .then(res => {
            dispatch(setPhoneConfirmAC(true))
            alert('hello')
        }).catch(err => {
        dispatch(setAppErrorAC(err))
    })
}

export const confirmSmsTC = (data: FormikErrorType) => (dispatch: Dispatch) => {
    formApi.confirm_sms_mock(data)
        .then(res => {
            alert('hello')
        }).catch(err => {
        dispatch(setAppErrorAC(err))
    })
}


type ActionsType = ReturnType<typeof setPhoneConfirmAC>

type InitialStateType = typeof initialState