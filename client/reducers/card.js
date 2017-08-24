import {
  EXPAND_CARD, CLOSE_CARD,
} from '../actions';

const ensureCard = (cardId, state) => {
  if (! cardId || !state) return;

  if (! state.items[cardId]) {
    return {
      ...state,
      items: {
        [cardId]: {
          expand: false,
        },
      },
    };
  }

  return state;
};

const card = (state = {}, action) => {
  const type = action.type || '';
  const cardId = action.cardId;
  const safeState = ensureCard(cardId, state);

  switch(type) {
    case EXPAND_CARD:
      const newState = { ...safeState };
      for (const id of Object.keys(newState.items)) {
        newState.items[id].expand = id === cardId ? true : false;
      }

      return newState;
    case CLOSE_CARD:
      return {
        ...safeState,
        items: {
          [cardId]: {
            ...safeState.items[cardId],
            expand: false,
          },
        }
      };
    default: return state;
  }
}

export default card;
