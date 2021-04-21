//const event_options = { "capture": true, "passive": false };

/**
 * @param {Window|Element} node
 * @param {string} event
 * @param {Function} fn
 */

export function addListener(node, event, fn){

    node.addEventListener(event, fn);
}

/**
 * @param {Window|Element} node
 * @param {string} event
 * @param {Function} fn
 */

export function removeListener(node, event, fn){

    node.removeEventListener(event, fn);
}

export function getByClass(root, name){

    return root.getElementsByClassName(name)[0];
}

export function setStyle(node, style, value){

    if(node["_s_" + style] !== value){

        node.style.setProperty(style, value);
        node["_s_" + style] = value;
    }
}

export function setText(node, value){

    node.firstChild.nodeValue = value;
}

export function preventEvent(event){

    event.preventDefault();
    event.stopPropagation();
    //event.stopImmediatePropagation();
    //event.returnValue = false;
}

export function addClass(node, classname){

    node.classList.add(classname);
}

export function removeClass(node, classname){

    node.classList.remove(classname);
}