import { addObject, updateObject, deleteObject } from '../actions';

export const CARD_OBJECT_TYPE = 'card';

export function addCard(cardId) {
  const card = { _id: cardId, isExpanded: false };
  return dispatch => dispatch(addObject(CARD_OBJECT_TYPE, card));
}

export function expandCard(cardId) {
  const card = { _id: cardId, isExpanded: true };
  return dispatch => dispatch(updateObject(CARD_OBJECT_TYPE, card));
}

export function closeCard(cardId) {
  const card = { _id: cardId, isExpanded: false };
  return dispatch => dispatch(updateObject(CARD_OBJECT_TYPE, card));
}

export function toggleCard(cardId) {
  return (dispatch, getState) => {
    const card = getState().objects[CARD_OBJECT_TYPE].find(card => (
      card._id === cardId
    ));

    if (! card) {
      dispatch(addCard(cardId));
      return dispatch(expandCard(cardId));
    }

    if (! card.isExpanded) {
      return dispatch(expandCard(cardId));
    }

    return dispatch(closeCard(cardId));
  }
}

export function deleteCard(cardId) {
  return dispatch => dispatch(deleteObject(CARD_OBJECT_TYPE, cardId));
}
