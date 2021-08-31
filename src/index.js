import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
//import Tree from "./Tree";
//import reducer from "./reducers/index";
const rootElement = document.getElementById("root");

//const store = createStore(reducer,Tree);

ReactDOM.render(<App />, rootElement);
