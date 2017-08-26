import { addObject, updateObject, deleteObject } from '../actions';

export const CARD_OBJECT_TYPE = 'card';

export function addCard(cardId) {
  return addObject(CARD_OBJECT_TYPE, {
    _id: cardId,
    isExpanded: false,
  });
}

export function expandCard(cardId) {
  return updateObject(CARD_OBJECT_TYPE, {
    _id: cardId,
    isExpanded: true,
  });
}

export function closeCard(cardId) {
  return updateObject(CARD_OBJECT_TYPE, {
    _id: cardId,
    isExpanded: false,
  });}

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
  return deleteObject(CARD_OBJECT_TYPE, cardId);
}
