
function render(VDOM, container) {

    const ParentRDOM = document.createElement(VDOM.type)

    container.appendChild(ParentRDOM)
}

const ReactDOM = {
    render: render
}

export default ReactDOM