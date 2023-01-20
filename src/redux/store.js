import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogrReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';


let rootReducers = combineReducers({
    sidebar: sidebarReducer,
    dialog: dialogrReducer,
    auth: authReducer,
})




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))



export default store;
window.store = window