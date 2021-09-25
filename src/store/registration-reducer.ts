
const initialState = {
    authMode: false,
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'register/SET-AUTH-NODE':
            return {...state, authMode: action.value}
        default:
            return state
    }
}


export const setAuthModeAC = (value: boolean) => ({type: 'register/SET-AUTH-NODE', value} as const)


type ActionsType = ReturnType<typeof setAuthModeAC>

type InitialStateType = typeof initialState