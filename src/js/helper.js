/**
 * @param {Window|Element} node
 * @param {string} event
 * @param {Function} fn
 * @param {AddEventListenerOptions|boolean=} opt
 */

export function addListener(node, event, fn, opt){

    node.addEventListener(event, fn, opt || (opt === false) ? opt : true);
}

/**
 * @param {Window|Element} node
 * @param {string} event
 * @param {Function} fn
 * @param {AddEventListenerOptions|boolean=} opt
 */

export function removeListener(node, event, fn, opt){

    node.removeEventListener(event, fn, opt || (opt === false) ? opt : true);
}

/**
 * @param event
 * @param {boolean=} prevent
 */

export function preventEvent(event, prevent){

    event.stopPropagation();
    /*prevent &&*/ event.cancelable && event.preventDefault();

    //event.stopImmediatePropagation();
    //event.returnValue = false;
}

export function getByClass(root, name){

    return root.getElementsByClassName(name)[0];
}

export function addClass(node, classname){

    node.classList.add(classname);
}

export function removeClass(node, classname){

    node.classList.remove(classname);
}

export function setStyle(node, style, value){

    value = "" + value;

    if(node["_s_" + style] !== value){

        node.style.setProperty(style, value);
        node["_s_" + style] = value;
    }
}

export function setText(node, value){

    node.firstChild.nodeValue = value;
}
