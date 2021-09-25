import axios from "axios";
import {FormikErrorType} from "../pages/Auth";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const formApi = {
    login_mock(data: FormikErrorType) {
        return new Promise((res, rej) => {
            if (data.phone === '+7 999 999-99-99' && data.password === '1234567890') {
                res(true)
            } else {
                rej('Введен неверный номер телефона или пароль!')
            }
        })
    },
    confirm_phone_mock(data: FormikErrorType) {
        return new Promise((res, rej) => {
            if (data.code === '+7 999 999-99-99') {
                res(true)
            } else {
                rej('Неверный номер тедефона')
            }
        })
    },
    confirm_sms_mock(data: FormikErrorType) {
        return new Promise((res, rej) => {
            if (data.code === '5555') {
                res(true)
            } else {
                rej('Неверный код')
            }
        })
    },
}

type ResponseUserType = {
    id: number,
    phone: string,
    first_name: string,
    last_name: string,
}