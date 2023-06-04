import SReact from './src/react/React.js';
import SReactDOM from './src/react-dom/ReactDOM.js';
const VDOM = SReact.createElement("div", {
  id: "111"
}, SReact.createElement("div", null), SReact.createElement("div", null, "shuhao"), SReact.createElement("div", null, "yuliang"), SReact.createElement("div", null, SReact.createElement("div", {
  className: "sh"
}, "sh"), SReact.createElement("div", {
  id: "sdfdsf"
}, "sdfdsf"), SReact.createElement("div", null)), SReact.createElement("div", null));
console.log("VDOM", VDOM);

// SReactDOM.render(VDOM, document.getElementById("root"))
