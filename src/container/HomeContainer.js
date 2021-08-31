import { connect } from "react-redux";
import { addChild, removeChild, increment, deleteNode } from "../Action";
//import Node from "./Node";
import Home from "../components/Home";
//import { increment } from "../reducer";
const mapDispatchToProps = (dispatch) => ({
  //Jo bhi data bhejna hai

  incrementHandler: (id) => dispatch(increment(id)),
  deleteNodeHandler: (nodeId) => dispatch(deleteNode(nodeId)),
  addChildHandler: (nodeId, childId) => dispatch(addChild(nodeId, childId))
  //incrementHandler: () => dispatch(increment())
});
function mapStateToProps(state, ownProps) {
  console.log(state);
  return state;
}
//Jo bhi data lena hai

export default connect(mapStateToProps, mapDispatchToProps)(Home);
/*function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;*/
