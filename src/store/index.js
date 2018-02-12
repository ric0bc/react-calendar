import { combineReducers, createStore } from 'redux';
import eventsReducer from '../components/reducer'; 

const rootReducer = combineReducers({
  eventsState: eventsReducer,
  });

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;