import { OPEN_MODAL } from '../actions/action';

const INITIAL_STATE = {
  bool: false,
  event: '',
  modalData: null
}

function modalReducer (state = INITIAL_STATE, action ) {

  switch (action.type) {
    case OPEN_MODAL :
      return {
        ...state,
        bool: action.bool,
        event: action.event
      }
    default :
      return state
  }
}

export default modalReducer