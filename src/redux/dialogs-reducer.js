import { dialogsAPI, messagesAPI } from "../api/api"

const GET_DIALOGS = 'dialogs/GET_DIALOGS'
const CREATE_DIALOGS = 'dialogs/CREATE_DIALOGS'

let initialState = {
    dialogs: [],


}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS: {
            return {
                ...state,
                dialogs: action.payload
            }
        }
        case CREATE_DIALOGS: {
            return {
                ...state,
                dialogs: [...state.dialogs, action.payload]
            }
        }
        default:
            return state;
    }
}



export const getDialogsAction = (dialogs) => {
    return {
        type: GET_DIALOGS,
        payload: dialogs
    }
}
export const createDialogsAction = (dialogs) => {
    return {
        type: CREATE_DIALOGS,
        payload: dialogs
    }
}







//==============
export const getDialogs = () => {
    return async (dispatch) => {
        try {
            let data = await dialogsAPI.getDialogs()
            if (data) {
                dispatch(getDialogsAction(data))
            }
        } catch (error) {
            console.log(error);
            alert('Не получилось получить диалоги')
        }

    }
}
export const createDialog = (author, partner, text) => {
    return async (dispatch) => {
        try {
            let data = await dialogsAPI.createDialog(author, partner, text)
            if (data) {
                dispatch(createDialogsAction(data))
                await messagesAPI.sendMessage(text, data._id)
            }
        } catch (error) {
            console.log(error);
            alert('Не получилось создать диалог')
        }

    }
}

export default dialogsReducer;