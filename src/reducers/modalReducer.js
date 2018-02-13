import { OPEN_MODAL, MODAL_DATA } from '../actions/action';

const INITIAL_STATE = {
  bool: false,
  modalData: null
}

function modalReducer (state = INITIAL_STATE, action ) {

  switch (action.type) {
    case OPEN_MODAL :
      return {
        ...state,
        bool: action.bool
      }
    case MODAL_DATA :
      return {
        ...state,
        modalData: action.event
      }
    default :
      return state
  }
}

export default modalReducer