import { 
  GET_EVENTS, 
  CHANGE_TIME, 
  ADD_EVENT,
  REMOVE_EVENT
} from '../actions/action'

const INITIAL_STATE = {
  events: [],
  newEvent: null
}

const replaceObjectInArray = (array, newIndex, object) => {
  return array.map((item, index) => {
    if(index !== newIndex){
      return item
    }
    return {...item, ...object}
  })
}

function eventsReducer (state = INITIAL_STATE, action ) {

  let index;
  if(action.event) {
    index = [...state.events].findIndex(i => i.id === action.event.id);
  }

  switch (action.type) {
    case GET_EVENTS :
      return {
        ...state,
        events: action.events
      }
    case CHANGE_TIME: 
      return {
        ...state,
        events: replaceObjectInArray([...state.events], index, action.event)
      }
    case ADD_EVENT:
      const lastIndex = [...state.events].length  
      return {
        ...state,
        events: [
          ...state.events.slice(0, lastIndex),
          action.event,
          ...state.events.slice(lastIndex)
        ]
      }
    case REMOVE_EVENT :
      return {
        ...state,
        events: [...state.events.filter((item, i) => i !== index)]
      }
    default :
      return state
  }
}

export default eventsReducer