import {
  EXPAND_CARD, CLOSE_CARD, DELETE_CARD,
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

  return { ...state };
};

const card = (state = {}, action) => {
  const type = action.type || '';
  const cardId = action.cardId;
  const parent = action.parent;
  const safeState = ensureCard(cardId, state);

  switch(type) {
    case EXPAND_CARD:
      return {
        ...safeState,
        items: Object.keys(safeState.items).reduce((items, id) => {
          const card = safeState.items[id];

          return {
            ...items,
            [id]: {
              ...card,
              expand: id === cardId || id === parent,
            },
          };
        }, {}),
      };

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

    case DELETE_CARD:
      const deleteState = { ...state };
      delete deleteState.items[cardId];

      return deleteState;

    default: return state;
  }
}

export default card;
