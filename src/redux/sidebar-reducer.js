import { usersAPI } from "../api/api";

const GET_USERS = 'GET_USERS'
const GET_USERS_FROM_SEARCH = 'GET_USERS_FROM_SEARCH'


let initialState = {
    users: [],
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        case GET_USERS_FROM_SEARCH: {
            return {
                ...state,
                users: action.payload,
            }
        }

        default:
            return state;
    }
}


export const getUsersFromSearchAction = (data) => {
    return {
        type: GET_USERS_FROM_SEARCH,
        payload: data
    }
}
export const getUsersAction = (data) => {
    return {
        type: GET_USERS,
        payload: data
    }
}





export const getUsers = () => {
    return async (dispatch) => {
        try {
            let data = await usersAPI.getUsers()
            if (data) {
                dispatch(getUsersAction(data))
            }
        } catch (error) {
            console.log(error);
            alert('Не получилось получить пользователей')
        }

    }
}

export const getUsersFromSearch = (term) => {
    return async (dispatch) => {
        try {
            let data = await usersAPI.getUsersFromSearch(term)
            if (data.length) {
                dispatch(getUsersFromSearchAction(data))
            } else {
                alert('Ничего не нашли')
            }
        } catch (error) {
            console.log(error);
            alert('Не получилось получить пользователей')
        }

    }
}









export default sidebarReducer;