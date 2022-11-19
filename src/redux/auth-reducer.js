const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

let initialState = {
    isAuth: true,


}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isAuth: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        default:
            return state;
    }
}


export const Logina = () => {
    return {
        type: LOGIN,
    }
}
export const Logouta = () => {
    return {
        type: LOGOUT,
    }
}



export default authReducer;