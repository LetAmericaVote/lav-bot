import {
  EXPAND_CARD, CLOSE_CARD, DELETE_CARD,
} from '../actions';

const card = (state = {}, action) => {
  switch(action.type) {
    case EXPAND_CARD:
      return {
        ...state,
        items: {
          ...state.items,
          [action.cardId]: {
            expand: true,
          },
        },
      };

    case CLOSE_CARD:
      return {
        ...state,
        items: {
          ...state.items,
          [action.cardId]: {
            expand: false,
          },
        },
      };

    case DELETE_CARD:
      const deleteState = { ...state };
      delete deleteState[action.cardId];
      return deleteState;

    default: return state;
  }
}

export default card;
