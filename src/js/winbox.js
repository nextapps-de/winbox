/**
 * WinBox.js
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */

import template from "./template.js";
import { addListener, removeListener, setStyle, setText, getByClass, addClass, removeClass, hasClass, preventEvent } from "./helper.js";

//const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];

const use_raf = false;
//const doc = document.documentElement;
const stack_min = [];
let body;
let id_counter = 0;
let dblclick_timer = 0;
let index;
let is_fullscreen;
let last_focus;
let prefix_request;
let prefix_exit;
let root_w, root_h;

/**
 * @param {string|Object=} params
 * @param {Object=} _title
 * @constructor
 * @this WinBox
 */

function WinBox(params, _title){

    if(!(this instanceof WinBox)) {

        return new WinBox(params);
    }

    index || setup();

    let id,
        root,
        customTemplate,
        title,
        mount,
        html,
        url,
        width,
        height,
        minwidth,
        minheight,
        x,
        y,
        max,
        hidden,
        top,
        left,
        bottom,
        right,
        modal,
        onclose,
        onfocus,
        onblur,
        onmove,
        onresize,
        onfullscreen,
        onmaximize,
        onminimize,
        onwindowize,
        background,
        border,
        classname,
        splitscreen;

    if(params){

        if(_title){

            title = params;
            params = _title;
        }

        if(typeof params === "string"){

            title = params;
        }
        else{

            if((modal = params["modal"])){

                x = y = "center";
            }

            id = params["id"];
            root = params["root"];
            customTemplate = params["template"];
            title = title || params["title"];
            mount = params["mount"];
            html = params["html"];
            url = params["url"];
            width = params["width"];
            height = params["height"];
            minwidth = params["minwidth"];
            minheight = params["minheight"];
            x = params["x"] || x;
            y = params["y"] || y;
            max = params["max"];
            hidden = params["hidden"];
            top = params["top"];
            left = params["left"];
            bottom = params["bottom"];
            right = params["right"];
            index = params["index"] || index;
            onclose = params["onclose"];
            onfocus = params["onfocus"];
            onblur = params["onblur"];
            onmove = params["onmove"];
            onresize = params["onresize"];
            onfullscreen = params["onfullscreen"];
            onmaximize = params["onmaximize"];
            onminimize = params["onminimize"];
            onwindowize = params["onwindowize"];
            background = params["background"];
            border = params["border"];
            classname = params["class"];
            splitscreen = params["splitscreen"];
        }
    }

    if(customTemplate){

        this.dom = customTemplate;
    }
    else{

        this.dom = template();
    }

    this.body = getByClass(this.dom, "wb-body");

    if(background){

        this.setBackground(background);
    }

    if(border){

        setStyle(this.body, "margin", border + (isNaN(border) ? "" : "px"));
    }

    this.setTitle(title || "");

    let max_width = root_w;
    let max_height = root_h;

    top = top ? parse(top, max_height) : 0;
    bottom = bottom ? parse(bottom, max_height) : 0;
    left = left ? parse(left, max_width) : 0;
    right = right ? parse(right, max_width) : 0;

    max_width -= left + right;
    max_height -= top + bottom;

    width = width ? parse(width, max_width) : (max_width / 2) | 0;
    height = height ? parse(height, max_height) : (max_height / 2) | 0;

    minwidth = minwidth ? parse(minwidth, max_width) : 0;
    minheight = minheight ? parse(minheight, max_height) : 0;

    x = x ? parse(x, max_width, width) : left;
    y = y ? parse(y, max_height, height) : top;

    index = index || 10;

    this.dom.id =
    this.id = id || ("winbox-" + (++id_counter));
    this.dom.className = "winbox" + (classname ? " " + (typeof classname === "string" ? classname : classname.join(" ")) : "") +
                                    (modal ? " modal" : "");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.minwidth = minwidth;
    this.minheight = minheight;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;

    this.border = border;
    this.min = false;
    this.max = false;

    this.onclose = onclose;
    this.onfocus = onfocus;
    this.onblur = onblur;
    this.onmove = onmove;
    this.onresize = onresize;
    this.onfullscreen = onfullscreen;
    this.onmaximize = onmaximize;
    this.onminimize = onminimize;
    this.onwindowize = onwindowize;
    this.splitscreen = splitscreen;

    if(max){

        this.maximize();
    }
    else{

        this.move().resize();
    }

    if(mount){

        this.mount(mount);
    }
    else if(html){

        this.body.innerHTML = html;
    }
    else if(url){

        this.setUrl(url);
    }

    if(hidden){
      
        this.hide();
    }
    else{
      
        this.focus();
    }
  
    this.dom.winbox = this;

    register(this);
    (root || body).appendChild(this.dom);
}

WinBox["new"] = function(params){

    return new WinBox(params);
};

export default WinBox;

/**
 * @param {number|string} num
 * @param {number} base
 * @param {number=} center
 * @return number
 */

function parse(num, base, center){

    if(typeof num === "string"){

        if(num === "center"){

            num = ((base - center) / 2) | 0;
        }
        else if(num === "right" || num === "bottom"){

            num = (base - center);
        }
        else{

            const value = parseFloat(num);
            const unit = (("" + value) !== num) && num.substring(("" + value).length);

            if(unit === "%"){

                num = (base / 100 * value) | 0;
            }
            else{

                num = value;
            }
        }
    }

    return num;
}

function setup(){

    body = document.body;

    body[prefix_request = "requestFullscreen"] ||
    body[prefix_request = "msRequestFullscreen"] ||
    body[prefix_request = "webkitRequestFullscreen"] ||
    body[prefix_request = "mozRequestFullscreen"] ||
    (prefix_request = "");

    prefix_exit = prefix_request && (

        prefix_request.replace("request", "exit")
                      .replace("mozRequest", "mozCancel")
                      .replace("Request", "Exit")
    );

    addListener(window, "resize", function(){

        init();
        update_min_stack();
    });

    init();
}

/**
 * @param {WinBox} self
 */

function register(self){

    addWindowListener(self, "title");
    addWindowListener(self, "n");
    addWindowListener(self, "s");
    addWindowListener(self, "w");
    addWindowListener(self, "e");
    addWindowListener(self, "nw");
    addWindowListener(self, "ne");
    addWindowListener(self, "se");
    addWindowListener(self, "sw");

    addListener(getByClass(self.dom, "wb-min"), "click", function(event){

        preventEvent(event);
        self.minimize();
    });

    addListener(getByClass(self.dom, "wb-max"), "click", function(event){

        preventEvent(event);
        self.focus().maximize();
    });

    if(prefix_request){

        addListener(getByClass(self.dom, "wb-full"), "click", function(event){

            preventEvent(event);
            self.focus().fullscreen();
        });
    }
    else{

        self.addClass("no-full");
    }

    addListener(getByClass(self.dom, "wb-close"), "click", function(event){

        preventEvent(event);
        self.close() || (self = null);
    });

    addListener(self.dom, "click", function(event){

        // stop propagation would disable global listeners used inside window contents
        // use event bubbling for this listener to skip this handler by the other click listeners
        self.focus();

    }, false);
}

/**
 * @param {WinBox} self
 */

function remove_min_stack(self){

    stack_min.splice(stack_min.indexOf(self), 1);
    update_min_stack();
    self.removeClass("min");
    self.min = false;
    self.dom.title = "";
}

function update_min_stack(){

    const len = stack_min.length;
    const tile_index = {};
    const tile_len = {};

    for(let i = 0, self, key; i < len; i++){

        self = stack_min[i];
        key = self.left + ":" + self.top;

        if(tile_len[key]){

            tile_len[key]++;
        }
        else{

            tile_len[key] = 1;
        }
    }

    for(let i = 0, self, key, width, header, headerHeight; i < len; i++){

        self = stack_min[i]
        key = self.left + ":" + self.top;
        width = Math.min((root_w - self.left - self.right) / tile_len[key], 250);
        header = getByClass(self.dom, "wb-title");
        headerHeight = header.clientHeight;
        tile_index[key] || (tile_index[key] = 0);
        self.resize((width + 1) | 0, 0, true)
            .move((self.left + tile_index[key] * width) | 0, root_h - self.bottom - headerHeight, true);
        tile_index[key]++;
    }
}

/**
 * @param {WinBox} self
 * @param {string} dir
 */

function addWindowListener(self, dir){

    const node = getByClass(self.dom, "wb-" + dir);
    let touch, x, y;

    addListener(node, "mousedown", mousedown);
    addListener(node, "touchstart", mousedown, { "passive": false });

    let raf, raf_move, raf_resize;

    function loop(){

        raf = requestAnimationFrame(loop);

        if(raf_resize){

            self.resize();
            raf_resize = false;
        }

        if(raf_move){

            self.move();
            raf_move = false;
        }
    }

    function mousedown(event){

        // prevent the full iteration through the fallback chain of a touch event (touch > mouse > click)
        preventEvent(event, true);

        if(self.min){

            self.minimize();
        }
        else {

            if(dir === "title" && !self.hasClass("no-max")){

                const now = Date.now();
                const diff = now - dblclick_timer;

                dblclick_timer = now;

                if(diff < 250){

                    self.maximize();
                    return;
                }
            }

            if(!self.max){

                addClass(body, "wb-drag");
                use_raf && loop();

                if((touch = event.touches) && (touch = touch[0])){

                    event = touch;

                    // TODO: fix when touch events bubbles up to the document body
                    //addListener(self.dom, "touchmove", preventEvent);
                    addListener(window, "touchmove", handler_mousemove);
                    addListener(window, "touchend", handler_mouseup);
                }
                else{

                    //addListener(this, "mouseleave", handler_mouseup);
                    addListener(window, "mousemove", handler_mousemove);
                    addListener(window, "mouseup", handler_mouseup);
                }

                x = event.pageX;
                y = event.pageY;

                // appearing scrollbars on the root element does not trigger "window.onresize",
                // force refresh window size via init(), also force layout recalculation (layout trashing)
                // it is probably very rare that the body overflow changes between window open and close

                //init();
                self.focus();
            }
        }
    }

    function handler_mousemove(event){

        preventEvent(event);

        if(touch){

            event = event.touches[0];
        }

        const pageX = event.pageX;
        const pageY = event.pageY;
        const offsetX = pageX - x;
        const offsetY = pageY - y;

        let resize_w, resize_h, move_x, move_y;

        if(dir === "title"){

            self.x += offsetX;
            self.y += offsetY;
            move_x = move_y = 1;
        }
        else{

            if(dir === "e" || dir === "se" || dir === "ne"){

                self.width += offsetX;
                resize_w = 1;
            }
            else if(dir === "w" || dir === "sw" || dir === "nw"){

                self.x += offsetX;
                self.width -= offsetX;
                resize_w = 1;
                move_x = 1;
            }

            if(dir === "s" || dir === "se" || dir === "sw"){

                self.height += offsetY;
                resize_h = 1;
            }
            else if(dir === "n" || dir === "ne" || dir === "nw"){

                self.y += offsetY;
                self.height -= offsetY;
                resize_h = 1;
                move_y = 1;
            }
        }

        if(resize_w || resize_h){

            if(resize_w){

                self.width = Math.max(Math.min(self.width, root_w - self.x - self.right), 150);
            }

            if(resize_h){

                self.height = Math.max(Math.min(self.height, root_h - self.y - self.bottom), 0);
            }

            use_raf ? raf_resize = true : self.resize();
        }

        if(move_x || move_y){

            if(move_x){

                self.x = Math.max(Math.min(self.x, root_w - self.width - self.right), self.left);
            }

            if(move_y){

                self.y = Math.max(Math.min(self.y, root_h - self.height - self.bottom), self.top);
            }

            use_raf ? raf_move = true : self.move();
        }

        x = pageX;
        y = pageY;
    }

    function handler_mouseup(event){

        preventEvent(event);
        removeClass(body, "wb-drag");
        use_raf && cancelAnimationFrame(raf);

        if(touch){

            //removeListener(self.dom, "touchmove", preventEvent);
            removeListener(window, "touchmove", handler_mousemove);
            removeListener(window, "touchend", handler_mouseup);
        }
        else{

            //removeListener(this, "mouseleave", handler_mouseup);
            removeListener(window, "mousemove", handler_mousemove);
            removeListener(window, "mouseup", handler_mouseup);
        }
    }
}

function init(){

    // TODO: the window height of iOS isn't determined correctly when the bottom toolbar disappears

    // the bounding rect provides more precise dimensions (float values)
    // //const rect = doc.getBoundingClientRect();
    // this.root_w = doc.clientWidth; //rect.width || (rect.right - rect.left);
    // this.root_h = doc.clientHeight; //rect.height || (rect.top - rect.bottom);

    // if(ios){
    //     this.root_h = window.innerHeight * (this.root_w / window.innerWidth);
    // }

    // root_w = doc.clientWidth;
    // root_h = doc.clientHeight;

    root_w = body.clientWidth;
    root_h = body.clientHeight;
}

/**
 * @param {Element=} src
 * @this WinBox
 */

WinBox.prototype.mount = function(src){

    // handles mounting over:
    this.unmount();

    src._backstore || (src._backstore = src.parentNode);
    this.body.textContent = "";
    this.body.appendChild(src);

    return this;
};

/**
 * @param {Element=} dest
 * @this WinBox
 */

WinBox.prototype.unmount = function(dest){

    const node = this.body.firstChild;

    if(node){

        const root = dest || node._backstore;

        root && root.appendChild(node);
        node._backstore = dest;
    }

    return this;
};

/**
 * @this WinBox
 */

WinBox.prototype.setTitle = function(title){

    setText(getByClass(this.dom, "wb-title"), this.title = title);
    return this;
};

/**
 * @this WinBox
 */

WinBox.prototype.setBackground = function(background){

    setStyle(this.dom, "background", background);
    return this;
};

/**
 * @this WinBox
 */

WinBox.prototype.setUrl = function(url){

    this.body.innerHTML = '<iframe src="' + url + '"></iframe>';
    return this;
};

/**
 * @this WinBox
 */

WinBox.prototype.focus = function(){

    if(last_focus !== this){

        setStyle(this.dom, "z-index", index++);
        this.addClass("focus");

        if(last_focus){

            last_focus.removeClass("focus");
            last_focus.onblur && last_focus.onblur();
        }

        last_focus = this;
        this.onfocus && this.onfocus();
    }

    return this;
};

/**
 * @this WinBox
 */

WinBox.prototype.hide = function(){

    return this.addClass("hide");
};

/**
 * @this WinBox
 */

WinBox.prototype.show = function(){

    return this.removeClass("hide");
};

/**
 * @this WinBox
 * @param {boolean=} state
 */

WinBox.prototype.minimize = function(state){

    if(is_fullscreen){

        cancel_fullscreen(this);
    }

    if(!state && this.min){

        remove_min_stack(this);
        this.resize().move().focus();
        this.onwindowize();
    }
    else if((state !== false) && !this.min){

        stack_min.push(this);
        update_min_stack();
        this.dom.title = this.title;
        this.addClass("min");
        this.min = true;
        this.onminimize();
    }

    if(this.max){

        this.removeClass("max");
        this.max = false;
        this.onminimize();
    }

    return this;
};

/**
 * @this WinBox
 * @param {boolean=} state
 */

WinBox.prototype.maximize = function(state){

    if(typeof state === "undefined" || (state !== this.max)){

        if(this.min){

            remove_min_stack(this);
        }

        if((this.max = !this.max)){

            this.addClass("max").resize(

                root_w - this.left - this.right,
                root_h - this.top - this.bottom /* - 1 */,
                true

            ).move(

                this.left,
                this.top,
                true
            );
            this.onmaximize();
        }
        else{

            this.resize().move().removeClass("max");
            this.onwindowize();
        }
    }

    return this;
};

/**
 * @this WinBox
 * @param {boolean=} state
 */

WinBox.prototype.fullscreen = function(state){

    if(typeof state === "undefined" || (state !== is_fullscreen)){

        if(this.min){

            this.resize().move();
            remove_min_stack(this);
        }

        // fullscreen could be changed by user manually!

        if(!is_fullscreen || !cancel_fullscreen(this)){

            // requestFullscreen is executed as async and returns promise.
            // in this case it is better to set the state to "this.full" after the requestFullscreen was fired,
            // because it may break when browser does not support fullscreen properly and bypass it silently.

            //this.dom[prefix_request]();
            this.body[prefix_request]();
            is_fullscreen = true;
            this.onfullscreen();
        }

    }

    return this;
};

function has_fullscreen(){

    return (

        document["fullscreen"] ||
        document["fullscreenElement"] ||
        document["webkitFullscreenElement"] ||
        document["mozFullScreenElement"]
    );
}

/**
 * @param {WinBox} self
 * @return {boolean|void}
 */

function cancel_fullscreen(self){

    is_fullscreen = false;

    if(has_fullscreen()){

        // exitFullscreen is executed as async and returns promise.
        // the important part is that the promise callback runs before the event "onresize" was fired!

        document[prefix_exit]();
        return true;
    }
}

/**
 * @param {boolean=} force
 * @this WinBox
 */

WinBox.prototype.close = function(force) {

    if(this.onclose && this.onclose(force)){

        return true;
    }

    if(this.min){

        remove_min_stack(this);
    }

    this.unmount();
    this.dom.parentNode.removeChild(this.dom);

    if(last_focus === this){

        last_focus = null;
    }
};

/**
 * @param {number|string=} x
 * @param {number|string=} y
 * @param {boolean=} _skip_update
 * @this WinBox
 */

WinBox.prototype.move = function(x, y, _skip_update){

    if(!x && (x !== 0)){

        x = this.x;
        y = this.y;

        if( this.splitscreen ){
            if( x === 0 ){
                this.resize(root_w / 2, root_h);
            } else if( x === (root_w - this.width) ){
                this.resize(root_w / 2, root_h);
            }
        }
    }
    else if(!_skip_update){

        this.x = x ? x = parse(x, root_w - this.left - this.right, this.width) : 0;
        this.y = y ? y = parse(y, root_h - this.top - this.bottom, this.height) : 0;
    }

    setStyle(this.dom, "transform", "translate(" + x + "px," + y + "px)");

    this.onmove && this.onmove(x, y);
    return this;
};

/**
 * @param {number|string=} w
 * @param {number|string=} h
 * @param {boolean=} _skip_update
 * @this WinBox
 */

WinBox.prototype.resize = function(w, h, _skip_update){

    if(!w && (w !== 0)){

        w = this.width;
        h = this.height;
    }
    else if(!_skip_update){

        this.width = w ? w = parse(w, root_w - this.left - this.right) : 0;
        this.height = h ? h = parse(h, root_h - this.top - this.bottom) : 0;
    }

    w = Math.max(w, this.minwidth);
    h = Math.max(h, this.minheight);

    setStyle(this.dom, "width", w + "px");
    setStyle(this.dom, "height", h + "px");

    this.onresize && this.onresize(w, h);
    return this;
};

/**
 * @param {string} classname
 * @this WinBox
 */

WinBox.prototype.addClass = function(classname){

    addClass(this.dom, classname);
    return this;
};

/**
 * @param {string} classname
 * @this WinBox
 */

WinBox.prototype.removeClass = function(classname){

    removeClass(this.dom, classname);
    return this;
};


/**
 * @param {string} classname
 * @this WinBox
 */

WinBox.prototype.hasClass = function(classname){

    return hasClass(this.dom, classname);
};
