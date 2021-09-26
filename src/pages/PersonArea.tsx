import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {Button} from "../components/Button"
import {setIsLoggedInAC} from "../store/auth-reducer"
import {setAuthModeAC} from "../store/registration-reducer"
import {Redirect} from "react-router-dom"
import React, {useEffect} from "react"



export const PersonArea = () => {

    useEffect( () => {
        dispatch(setAuthModeAC(false))
    },[])

    const name = useSelector<AppRootStateType, string>(state => state.register.user.first_name)
    const authMode = useSelector<AppRootStateType, boolean>(state => state.register.authMode)

    const dispatch = useDispatch()

    const logOutHandler = () => {
        dispatch(setIsLoggedInAC(false))
        dispatch(setAuthModeAC(true))
    }

    if (authMode) {
        return <Redirect to={'/'}/>
    }


    return (
        <div className="form person">
            <div>{`Добрый день,${name ? name : 'Уважаемый посетитель'}`}</div>
           <div onClick={logOutHandler}>
               <Button  className={'person-button button'} title={"Выход"}/>
           </div>
        </div>
    )
}