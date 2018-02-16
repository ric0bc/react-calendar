import { 
  CHANGE_VIEW
} from '../actions/action'

const INITIAL_STATE = {
  view: 'day',
}

function ViewReducer (state = INITIAL_STATE, action ) {
  switch (action.type) {
    case CHANGE_VIEW :
      return {
        ...state,
        view: action.view
      }
    default :
      return state
  }
}

export default ViewReducer