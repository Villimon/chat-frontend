import { messagesAPI } from "../api/api"

const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'
const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'
const GET_MESSAGES = 'dialogs/GET_MESSAGES'
const DELETE_MESSAGES = 'dialogs/DELETE_MESSAGES'

let initialState = {
    messages: [],


}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
        case GET_MESSAGES: {
            return {
                ...state,
                messages: action.payload
            }
        }
        case DELETE_MESSAGES: {
            return {
                ...state,
                messages: [...state.messages].filter(mes => mes._id !== action.payload)
            }
        }
        default:
            return state;
    }
}



export const addMessage = (newMessage) => {
    return {
        type: ADD_MESSAGE,
        payload: newMessage
    }
}
export const sendMessageAction = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    }
}
export const getMessagesAction = (messages) => {
    return {
        type: GET_MESSAGES,
        payload: messages
    }
}
export const deleteMessageAction = (messageId) => {
    return {
        type: DELETE_MESSAGES,
        payload: messageId
    }
}


//==============
export const getMessages = (dialogId) => {
    return async (dispatch) => {
        try {
            let data = await messagesAPI.getMessages(dialogId)
            if (data) {
                dispatch(getMessagesAction(data))
            }
        } catch (error) {
            console.log(error);
            alert('Не получилось получить сообщения')
        }

    }
}
export const sendMessage = (text, dialogId) => {
    return async (dispatch) => {
        try {
            let data = await messagesAPI.sendMessage(text, dialogId)
        } catch (error) {
            console.log(error);
            alert('Не получилось отправить сообщения')
        }

    }
}
export const deleteMessage = (messageId) => {
    return async (dispatch) => {
        try {
            let data = await messagesAPI.deleteMessage(messageId)
            if (data) {
                dispatch(deleteMessageAction(messageId))
            }
        } catch (error) {
            console.log(error);
            alert('Не получилось удалить сообщения')
        }

    }
}




export default messagesReducer;