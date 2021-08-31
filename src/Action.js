export const ADD_CHILD = "ADD_CHILD";
export const REMOVE_CHILD = "REMOVE_CHILD";
export const INCREMENT = "INCREMENT";
export const CREATE_NODE = "CREATE_NODE";
export const DELETE_NODE = "DELETE_NODE";

export const increment = (nodeId) => ({
  type: INCREMENT,
  nodeId
});
export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD,
  nodeId,
  childId
});

export const removeChild = (nodeId) => ({
  type: REMOVE_CHILD,
  nodeId
});
let nextId = 0;
export const createNode = () => ({
  type: CREATE_NODE,
  nodeId: `${nextId++}`
});

export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  nodeId
});
