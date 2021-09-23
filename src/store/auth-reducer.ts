
const initialState = {
    isLoggedIn: false,
    registerMode: false,
    passwordRecoveryMode: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'login/SET-REGISTER-MODE':
            return {...state, registerMode: action.value}
        case 'login/SET-PASSWORD-RECOVERY-MODE':
            return {...state, passwordRecoveryMode: action.value}
        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setRegisterModeAC = (value: boolean) => ({type: 'login/SET-REGISTER-MODE', value} as const)
export const setPasswordRecoveryModeAC = (value: boolean) => ({type: 'login/SET-PASSWORD-RECOVERY-MODE', value} as const)

type ActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setRegisterModeAC> | ReturnType<typeof setPasswordRecoveryModeAC>

type InitialStateType = typeof initialState