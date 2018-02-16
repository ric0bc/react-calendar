import { combineReducers, createStore } from 'redux';
import eventsReducer from '../reducers/reducer';
import modalReducer from '../reducers/modalReducer'; 
import viewReducer from '../reducers/CalendarViewReducer'; 

const rootReducer = combineReducers({
  eventsState: eventsReducer,
  modalState: modalReducer,
  viewState: viewReducer,
  });

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;