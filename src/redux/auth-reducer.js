import { authAPI, followAPI } from "../api/api"

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REGISTER = 'REGISTER'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SAVE_PHOTO = 'SAVE_PHOTO'
const SET_NEW_FULL_NAME = 'SET_NEW_FULL_NAME'



let initialState = {
    isAuth: false,
    data: null

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                data: action.payload,
                isAuth: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false,
                data: null
            }
        }
        case REGISTER: {
            return {
                ...state,
                data: action.payload,
                isAuth: true
            }
        }
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                data: action.payload,
                isAuth: true
            }
        }

        case FOLLOW: {
            return {
                ...state,
                data: { ...state.data, friends: [...state.data.friends, action.payload] }
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                data: {
                    ...state.data, friends: state.data.friends.filter(friend => {
                        return friend !== action.payload
                    })
                },

            }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                data: { ...state.data, avatarUrl: action.payload }

            }
        }
        case SET_NEW_FULL_NAME: {
            return {
                ...state,
                data: { ...state.data, fullName: action.payload }

            }
        }


        default:
            return state;
    }
}


export const loginAction = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}
export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const registerAction = (data) => {
    return {
        type: REGISTER,
        payload: data
    }
}
export const setAuthUserData = (data) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: data
    }
}


export const followAction = (id) => {
    return {
        type: FOLLOW,
        payload: id
    }
}
export const unfollowAction = (id) => {
    return {
        type: UNFOLLOW,
        payload: id
    }
}
export const savePhotoSuccess = (photo) => {
    return {
        type: SAVE_PHOTO,
        payload: photo
    }
}
export const setNewFullName = (name) => {
    return {
        type: SET_NEW_FULL_NAME,
        payload: name
    }
}




export const Register = (fullName, email, password) => {
    return async (dispatch) => {
        try {
            let data = await authAPI.register(fullName, email, password)
            if (data) {
                dispatch(registerAction(data))
                window.localStorage.setItem('token', data.token)
            }
        } catch (error) {
            console.log(error);
            alert('Не удалось зарегистрироваться')
        }

    }
}

export const LoginThunk = (email, password) => {
    return async (dispatch) => {
        try {
            let data = await authAPI.login(email, password)
            if (data) {
                dispatch(loginAction(data))
                window.localStorage.setItem('token', data.token)
            }
        } catch (error) {
            console.log(error);
            alert('Не удалось войти')
        }

    }
}
export const GetUserData = () => {
    return async (dispatch) => {
        try {
            let data = await authAPI.getUserData()
            if (data) {
                dispatch(setAuthUserData(data))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        try {
            let data = await authAPI.savePhoto(file)
            if (data) {
                dispatch(savePhotoSuccess(data.avatarUrl))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
export const updateFullName = (newFullName) => {
    return async (dispatch) => {
        try {
            let data = await authAPI.updateFullName(newFullName)
            if (data) {
                dispatch(setNewFullName(data.fullName))
            }
        } catch (error) {
            console.log(error);
        }

    }
}

export const follow = (id) => {
    return async (dispatch) => {
        try {
            let data = await followAPI.follow(id)
            if (data) {
                dispatch(followAction(id))
            }
        } catch (error) {
            console.log(error);
            alert('Не удалось добавить в друзья')
        }
    }
}
export const unfollow = (id) => {
    return async (dispatch) => {
        try {
            let data = await followAPI.unfollow(id)
            if (data) {
                dispatch(unfollowAction(id))
            }
        } catch (error) {
            console.log(error);
            alert('Не удалось добавить в друзья')
        }
    }
}





export default authReducer;