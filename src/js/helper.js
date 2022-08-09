/**
 * @param {Window|Element} node
 * @param {string} event
 * @param {Function} fn
 * @param {AddEventListenerOptions|boolean=} opt
 */

export function addListener(node, event, fn, opt){

    node && node.addEventListener(event, fn, opt || false);
}

/**
 * @param {Window|Element} node
 * @param {string} event
 * @param {Function} fn
 * @param {AddEventListenerOptions|boolean=} opt
 */

export function removeListener(node, event, fn, opt){

    node && node.removeEventListener(event, fn, opt || false);
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

export function hasClass(node, classname){

    return node.classList.contains(classname);
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

export function setAttribute(node, key, value){

    value = "" + value;

    if(node["_a_" + key] !== value){

        node.setAttribute(key, value);
        node["_a_" + key] = value;
    }
}

export function removeAttribute(node, key){

    if(node["_a_" + key] !== null){

        node.removeAttribute(key);
        node["_a_" + key] = null;
    }
}

export function setText(node, value){

    const textnode = node.firstChild;
    textnode ? textnode.nodeValue = value : node.textContent = value;
}
