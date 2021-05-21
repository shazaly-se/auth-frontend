import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'



const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store