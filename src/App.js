import "./styles.css";
//import { createStore } from "react-redux";
//import { Provider } from "react-redux";
//import reducer from "./reducer";
//import { combineReducer } from "redux";
//import index from "./reducers/index"
//import Tree from "./Tree";
//import Home from "./components/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeContainer from "./container/HomeContainer";
import Tree from "./Tree";
import reducer from "./reducers/reducer";
export default function App() {
  const tree = Tree();
  const store = createStore(reducer, tree);
  //console.log(store);
  //const store = createStore(reducer, tree);
  return (
    <>
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    </>
  );
}
