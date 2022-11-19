import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogrReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';


let rootReducers = combineReducers({
    sidebar: sidebarReducer,
    dialog: dialogrReducer,
    auth: authReducer,
})




const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export default store;
window.store = window