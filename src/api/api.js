import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:3003/api',

})
instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})


export const authAPI = {
    register(fullName, email, password) {
        return instance.post('/register', { fullName, email, password })
            .then(res => {
                return res.data
            })
    },
    login(email, password) {
        return instance.post('/login', { email, password })
            .then(res => {
                return res.data
            })
    },
    getUserData() {
        return instance.get('/me')
            .then(res => {
                return res.data
            })
    },
    savePhoto(photo) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put('http://localhost:3003/users', formData)
            .then(res => {
                return res.data
            })
    },
    updateFullName(fullName) {
        return instance.put('/users', { fullName: fullName })
            .then(res => {
                return res.data
            })
    },
}


export const usersAPI = {
    getUsers() {
        return instance.get(`/users`)
            .then(res => {
                return res.data
            })
    },
    getUsersFromSearch(term) {
        return instance.get(`/users?term=${term}`)
            .then(res => {
                return res.data
            })
    },

}



export const followAPI = {
    follow(id) {
        return instance.post(`/follow/${id}`, {})
            .then(res => {
                return res.data
            })
    },
    unfollow(id) {
        return instance.delete(`/follow/${id}`)
            .then(res => {
                return res.data
            })
    },
}

export const dialogsAPI = {
    getDialogs() {
        return instance.get(`/dialogs`)
            .then(res => {
                return res.data
            })
    },
    createDialog(author, partner, text) {
        return instance.post(`/dialogs`, { author, partner, text })
            .then(res => {
                return res.data
            })
    }
}

export const messagesAPI = {
    getMessages(dialogId) {
        return instance.get(`/messages?dialog=${dialogId}`)
            .then(res => {
                return res.data
            })
    },
    sendMessage(text, dialogId) {
        return instance.post(`/messages`, { text, dialogId })
            .then(res => {
                return res.data
            })
    },
    deleteMessage(messageId) {
        return instance.delete(`/messages/${messageId}`)
            .then(res => {
                return res.data
            })
    }
}
