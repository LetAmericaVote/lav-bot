export const EXPAND_CARD = 'EXPAND_CARD';
export const CLOSE_CARD = 'CLOSE_CARD';

export function expandCard(cardId) {
  return { type: EXPAND_CARD, cardId };
}

export function closeCard(cardId) {
  return { type: CLOSE_CARD, cardId };
}

export function toggleCard(cardId) {
  return (dispatch, getState) => {
    const card = getState().card[cardId];
    if (! card || ! card.expand) {
      return dispatch(expandCard(cardId));
    }

    return dispatch(closeCard(cardId));
  }
}
