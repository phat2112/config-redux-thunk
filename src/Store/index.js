import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';


// localStorage
let initState = {}
const persistedState = localStorage.getItem('reduxState')
if (persistedState) {
  initState = JSON.parse(persistedState)
}
///localStorage

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(thunk)
));