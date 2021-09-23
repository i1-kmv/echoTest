import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const formApi = {
   getUser(){
       return instance.get<ResponseUserType>( '/user')
   }
}

type ResponseUserType = {
    id: number,
    phone: string,
    first_name: string,
    last_name: string,
}