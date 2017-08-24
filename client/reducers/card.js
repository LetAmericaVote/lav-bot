import {
  EXPAND_CARD, CLOSE_CARD,
} from '../actions';

const ensureCard = (cardId, state) => {
  if (! state[cardId]) {
    return {
      ...state,
      [cardId]: {
        expand: false,
      },
    };
  }

  return state;
};

const auth = (state = {}, action) => {
  const { type, cardId } = action;
  const safeState = ensureCard(cardId, state);

  switch(type) {
    case EXPAND_CARD:
      return {
        ...safeState,
        [cardId]: {
          ...safeState[cardId],
          expand: true,
        },
      };
    case CLOSE_CARD:
    return {
      ...safeState,
      [cardId]: {
        ...safeState[cardId],
        expand: false,
      },
    };
    default: return state;
  }
}

export default auth;
