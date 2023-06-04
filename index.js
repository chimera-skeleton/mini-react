import SReact from './src/react/React.js'
import SReactDOM from './src/react-dom/ReactDOM.js';

const VDOM = (
    <div id='111'>
        <div></div>
        <div>shuhao</div>
        <div>yuliang</div>
        <div>
            <div className='sh'>sh</div>
            <div id='sdfdsf'>sdfdsf</div>
            <div></div>
        </div>
        <div></div>
    </div>
)

console.log("VDOM", VDOM)

// SReactDOM.render(VDOM, document.getElementById("root"))