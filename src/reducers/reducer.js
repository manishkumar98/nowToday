import {
  ADD_CHILD,
  REMOVE_CHILD,
  INCREMENT,
  CREATE_NODE,
  DELETE_NODE
} from "../Action";
//import { ADD_CHILD, REMOVE_NODE, INCREMENT } from "../Action";
//import { increment, addChild, removeNode } from "../Action";

export const childIds = (state = childIds, action) => {
  //console.log(action);
  //console.log("abx", state);
  switch (action.type) {
    case ADD_CHILD:
      return [state, action.childId];
    case REMOVE_CHILD:
      return state.filter((id) => id !== action.childId);

    default:
      return state;
  }
};

export const node = (state = node, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        nodeId: action.nodeId,
        counter: 0,
        childIds: []
      };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ADD_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, action)
      };
    case REMOVE_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, action)
      };

    default:
      return state;
  }
};

export const getChildrenIds = (state, nodeId) => {
  state[nodeId].childIds.reduce(
    (accumulator, childId) => [
      ...accumulator,
      childId,
      ...getChildrenIds(state, childId)
    ],
    []
  );
};
export const deleteAll = (state, ids) => {
  state = { ...state };
  ids.forEach((id) => delete state[id]);
  return state;
};

export default (state, action) => {
  const nodeId = action;
  if (action.type === DELETE_NODE) {
    const childrensIds = getChildrenIds(state, nodeId);
    return deleteAll(state, [nodeId, ...childrensIds]);
  }
  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  };
};
