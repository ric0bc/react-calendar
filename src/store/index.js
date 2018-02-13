import { combineReducers, createStore } from 'redux';
import eventsReducer from '../reducers/reducer';
import modalReducer from '../reducers/modalReducer'; 

const rootReducer = combineReducers({
  eventsState: eventsReducer,
  modalState: modalReducer
  });

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;