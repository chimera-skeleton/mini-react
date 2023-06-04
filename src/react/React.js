function ReactElement(type, key, ref, self, source, owner, props) {
    const element = {
        $$typeof: Symbol("react.element"),
        type: type,
        key: key,
        ref: ref,
        props: props,
        _owner: owner
    }
    return element
}

/**
 * 
 * @param {String} type The type is Dom Element name string
 * @param {Object} config The config is all props
 * @param {Array} children The children is child Dom Collection
 * @returns 
 */
function createElement(type, config, children) {

    let key = null
    let ref = null
    let self = null
    let source = null
    let owner = null

    // for props
    let propName
    const props = {}
    for (propName in config) {
        props[propName] = config[propName]
    }

    // for children
    const childrenLength = arguments.length - 2
    // handle text node
    if (childrenLength === 1) {
        props.children = children;
    }
    // handle VDOM
    else if (childrenLength > 1) {
        const childArray = new Array(childrenLength);
        for (let i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray
    }

    return ReactElement(type, key, ref, self, source, owner, props)
}

export default {
    createElement: createElement,
    version: "0.0.1",
    __mark: "scoheart"
}


