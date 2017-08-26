import {
  ADD_OBJECT, ADD_OBJECTS, UPDATE_OBJECT, DELETE_OBJECT
} from '../actions';

const ensureObjectType = (type, state) => {
  if (! state[type]) {
    return {
      ...state,
      [type]: [],
    };
  }

  return { ...state };
}

function addObject(state, action) {
  const { objectType, object } = action;

  const objects = [...state[objectType]];
  const hasNewObj = objects.find(obj => (
    obj._id === object._id
  ));

  if (! hasNewObj) {
    objects.push(object);
  }

  return {
    ...state,
    [objectType]: objects.map(obj => obj),
  }
}

function addManyObjects(state, action) {
  const { objectType, objects } = action;

  const nonDuplicateObjects = objects.filter(obj => ! (
    state[objectType].find(compare => compare._id === obj._id)
  ));

  return {
    ...state,
    [objectType]: [...state[objectType], ...nonDuplicateObjects],
  };
}

function updateObject(state, action) {
  const { objectType, object } = action;

  return {
    ...state,
    [objectType]: state[objectType].map(original => (
      original._id === object._id ? object : original
    )),
  };
}

function deleteObject(state, action) {
  const { objectType, objectId } = action;

  return {
    ...state,
    [objectType]: state[objectType].filter(compare => ! (
      compare._id === objectId
    )),
  };
}

const objects = (state = {}, action) => {
  const { type, objectType } = action;
  const safeState = ensureObjectType(objectType, state);

  switch(type) {
    case ADD_OBJECT:
      return addObject(safeState, action);

    case ADD_OBJECTS:
      return addManyObjects(safeState, action);

    case UPDATE_OBJECT:
      return updateObject(safeState, action);

    case DELETE_OBJECT:
      return deleteObject(safeState, action);

    default: return state;
  }
}

export default objects;
