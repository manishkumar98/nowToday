import { combineReducers } from "redux";
import { childIds, increment, node, nodeId } from "./reducer";

export default combineReducers({
  childIds,
  increment,
  node,
  nodeId
});
