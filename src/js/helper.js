export function addListener(node, event, fn){

    node.addEventListener(event, fn);
}

export function removeListener(node, event, fn){

    node.removeEventListener(event, fn);
}

export function getByClass(root, name){

    return root.getElementsByClassName(name)[0];
}

export function setStyle(node, style, value){

    // node._style || (node._style = {});
    //
    // if(node._style[style] !== value){
    //
    //     node.style.setProperty(style, value);
    //     node._style[style] = value;
    // }

    if(node["_s_" + style] !== value){

        node.style.setProperty(style, value);
        node["_s_" + style] = value;
    }
}

export function setText(node, value){

    if(node._text !== value){

        node.firstChild.nodeValue = value;
        node._text = value;
    }
}

export function preventEvent(event){

    event.preventDefault();
    event.stopImmediatePropagation();
    //event.returnValue = false;
}

// export function addClass(node, classname){
//
//     node.classList.add(classname);
//
//     // node._class || (node._class = {});
//     //
//     // if(!node._class[classname]){
//     //
//     //     node.classList.add(classname);
//     //     node._class[classname] = 1;
//     // }
// }
