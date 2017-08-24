export const EXPAND_CARD = 'EXPAND_CARD';
export const CLOSE_CARD = 'CLOSE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export function expandCard(cardId, parent) {
  return { type: EXPAND_CARD, cardId, parent };
}

export function closeCard(cardId, parent) {
  return { type: CLOSE_CARD, cardId, parent };
}

export function toggleCard(cardId, parent) {
  return (dispatch, getState) => {
    const card = getState().card.items[cardId];
    if (! card || ! card.expand) {
      return dispatch(expandCard(cardId, parent));
    }

    return dispatch(closeCard(cardId, parent));
  }
}

export function deleteCard(cardId) {
  return { type: DELETE_CARD, cardId };
}
