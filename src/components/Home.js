import React from "react";
import { getChildrenIds } from "../reducers/reducer";
//import { Component } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import * as actions from "../Action";
//import HomeContainer from "../container/HomeContainer";
//import { connect } from "react-redux";
//import { childIds, increment, node } from "../reducers/index";
//import { useSelector, useDispatch } from "react-redux";
//import { ReactReduxContext } from "react-redux";
/*function addChildHandler(props) {
  // e.preventDefault();
  const { addChild, createNode, id } = props;
  const childId = createNode().nodeId;
  addChild(id, childId);
}*/
/*function removeNodeHandler(props) {
  const { removeNode, deleteNode, parentId, id } = props;
  removeNode(parentId, id);
  deleteNode(id);
}*/
/*function incrementHandler(props) {
  const { increment, id } = props;
  increment(id);
}*/
function renderChild(props) {
  // console.log(Object.childIds);
  const { childIds, nodeId } = Object;
  return (
    <li key={childIds}>
      <Home nodeId={childIds} parentId={nodeId} />
    </li>
  );
}

function Home(props) {
  console.log(props);
  //const childId = useSelector(state => state.childId);
  //console.log(childId)
  //const dispatch = useDispatch()
  //const { store } = useContext(ReactReduxContext);

  const {
    counter,
    nodeId,
    childIds,
    parentId,
    increment,
    addChild,
    removeChild,
    createNode,
    deleteNode
  } = props;
  console.log(props.parentId);
  //console.log(store);
  console.log(props.nodeId);
  console.log(props.childIds);
  return (
    <>
      <div>Counter:{props.counter}</div>
      <button onClick={props.incrementHandler}>+</button>
      {typeof parentId !== "undefined" && (
        <a onClick={props.deleteNodeHandler}> x</a>
      )}
      <ul>
        {props.childIds && props.childIds.length > 0
          ? childIds.map(renderChild(props))
          : "Loading"}
        <li>
          <a href="#" onClick={props.addChildHandler}>
            Add child
          </a>
        </li>
      </ul>
    </>
  );
}
//   {childIds.map(renderChild)}
export default Home;
/*function mapStateToProps(state) {
  return state;
}
const ConnectedHome = connect(mapStateToProps, actions)(Home);
export default ConnectedHome;*/
/*{childIds.map(renderChild(props))}
{<div>{renderChild}</div>}
*/
