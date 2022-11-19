const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'

let initialState = {
    messages: [
        { id: 7, time: '13.34', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum repellat expedita enim provident laboriosam! Reprehenderit assumenda nisi blanditiis delectus necessitatibus quaerat amet, illum eos. Dolore qui quasi tenetur cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum repellat expedita enim provident laboriosam! Reprehenderit assumenda nisi blanditiis delectus necessitatibus quaerat amet, illum eos. Dolore qui quasi tenetur cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum repellat expedita enim provident laboriosam! Reprehenderit assumenda nisi blanditiis delectus necessitatibus quaerat amet, illum eos. Dolore qui quasi tenetur cumque.' },
        { id: 1, time: '13.31', text: 'Привет' },
        { id: 2, time: '13.31', text: 'Как дела? Что нового?' },
        { id: 3, time: '13.32', text: 'Я купил себе новые носки' },
        { id: 4, time: '13.32', text: 'А еще сегодня иду а там собака была, я к ней подбегаю и говорю:"Здарова,пес, как дела?" ' },
        { id: 5, time: '13.33', text: 'Ну и вообще занимаюсь по чуть делами, вот делаю проект небольшой, думаю поможет он мне в будущем' },
        { id: 6, time: '13.34', text: 'Делаю вместе с Сапиком, диким парнем' },

    ],


}

const dialogrReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = action.newMessage
            let newMessage = {
                id: 7,
                time: '13.35',
                text: message,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state;
    }
}



export const addMessage = (newMessage) => {
    return {
        type: ADD_MESSAGE,
        newMessage
    }
}


export default dialogrReducer;