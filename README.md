<h1>
    <img src="https://cdn.jsdelivr.net/gh/nextapps-de/winbox@master/demo/winbox.png" alt="WinBox.js: HTML5 Window Manager for the Web." width="100%">
</h1>
<h3>Modern window manager for the web: lightweight, outstanding performance, no dependencies, fully customizable, open source!</h3>

<a target="_blank" href="https://www.npmjs.com/package/winbox"><img src="https://img.shields.io/npm/v/winbox.svg"></a>
<a target="_blank" href="https://github.com/nextapps-de/winbox/issues"><img src="https://img.shields.io/github/issues/nextapps-de/winbox.svg"></a>
<a target="_blank" href="https://github.com/nextapps-de/winbox/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/winbox.svg"></a>

<a href="https://nextapps-de.github.io/winbox/">Demo</a> &ensp;&bull;&ensp; <a href="#started">Getting Started</a> &ensp;&bull;&ensp; <a href="#options">Options</a> &ensp;&bull;&ensp; <a href="#api">API</a> &ensp;&bull;&ensp; <a href="#themes">Themes</a> &ensp;&bull;&ensp; <a href="#customize">Customize</a> &ensp;&bull;&ensp; <a href="CHANGELOG.md">Changelog</a>

<h3>Live Demo / Code Examples: <br><a href="https://nextapps-de.github.io/winbox/">https://nextapps-de.github.io/winbox/ </a></h3>

<a name="started"></a>
## Getting Started

__Get Latest Stable Build (Recommended):__

<table>
    <tr>
        <td colspan=3">
            <b><u>Bundle:</u></b> (all assets bundled into one single file: js + css + html + icons)
        </td>
    </tr>
    <tr>
        <td>winbox.bundle.js</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.1.8/dist/winbox.bundle.js" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/winbox.bundle.js" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/winbox.bundle.js</a></td>
    </tr>
    <tr>
        <td colspan=3">
            <br><b><u>Non-Bundled:</u></b> (js and css are separated, css includes icons as base64)
        </td>
    </tr>
    <tr>
        <td>winbox.min.js</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.1.8/dist/js/winbox.min.js" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/js/winbox.min.js" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/js/winbox.min.js</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>winbox.min.css</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.1.8/dist/css/winbox.min.css" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/css/winbox.min.css" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/dist/css/winbox.min.css</a></td>
    </tr>
    <tr>
        <td colspan=3">
            <br><b><u>Sources:</u></b> (not bundled at all, images as url to original resources)
        </td>
    </tr>
    <tr>
        <td>ES6 Modules</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.1.8/src/js" target="_blank">Download</a></td>
        <td>The <i>/src/js</i> folder of this Github repository</td>
    </tr>
    <tr></tr>
    <tr>
        <td>LESS Files (source)</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.1.8/src/css" target="_blank">Download</a></td>
        <td>The <i>/src/css</i> folder of this Github repository</td>
    </tr>
    <tr></tr>
    <tr>
        <td>winbox.css (compiled)</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.1.8/src/css/winbox.css" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/src/css/winbox.css" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.1.8/src/css/winbox.css</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>src.zip</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.1.8/dist" target="_blank">Download</a></td>
        <td>Download all source files including image original resources.</td>
    </tr>
</table>

__Get Latest Nightly Build (Do not use for production!):__

Just exchange the version number from the URLs above with "master", e.g.: "/winbox/__0.1.8__/dist/" into "/winbox/__master__/dist".

__Get Latest (NPM):__

```cmd
npm install winbox
```

__Get Latest (ES6 Modules):__

https://github.com/nextapps-de/winbox/tree/master/src/js

### Use Bundled Version

The bundled version includes all assets like js, css, html and icon images as base64.

```html
<html>
<head>
    <script src="winbox.bundle.js"></script>
</head>
<body></body>
</html>
```

### Use Non-Bundled Version

The non-bundled version needs to load js and css separately (css also includes icons as base64).

```html
<html>
<head>
    <link rel="stylesheet" href="winbox.min.css">
    <script src="winbox.min.js"></script>
</head>
<body></body>
</html>
```

### Preload Library / Async Load (Recommended)

Just add a link tag to the header sections which indicated to preload the script. Right before the body is closing add your site scripts. Depending on your code you may need to load them in the right order.

```html
<html>
<head>
    <title></title>
    <link rel="preload" href="winbox.bundle.js" as="script">
</head>
<body>
    <!--
    
    HTML CONTENT
    
    -->
    <!-- BOTTOM OF BODY -->
    <script src="winbox.bundle.js" defer></script>
    <!-- YOUR SCRIPT -->
    <script src="my-script.js" defer></script>
</body>
</html>
```

You can also load the non-bundled version in the same way.

> In rare situations it might produce a short flashing/reflow after page load, depending on your stack. Moving the script tag into the head section will solve this issue. Also try to use the non-bundled version.

### ES6 Modules

The ES6 modules are located in `src/js/`. You need to load the stylesheet file explicitly (includes icons as base64).

```html
<head>
    <link rel="stylesheet" href="dist/css/winbox.min.css">
</head>
```

```html
<script type="module">
  import WinBox from "./src/js/winbox.js";
</script>
```

You can also load modules via CDN, e.g.:

```html
<script type="module">
  import WinBox from "https://unpkg.com/winbox@0.1.8/src/js/winbox.js";
</script>
```

The ES6 modules are not minified. Please use your favored bundler or build tool for this purpose.

<a name="api"></a>
## Overview

Constructor:

- new <a href="#winbox.new">**WinBox**(title, options\<key: value\>)</a> : winbox

Global methods:

- <a href="#winbox.new">WinBox.**new**(title, options\<key: value\>)</a> : winbox

Instance methods:

- <a href="#winbox.mount">winbox.**mount**(src)</a>
- <a href="#winbox.unmount">winbox.**unmount**(dest)</a>
- <a href="#winbox.move">winbox.**move**(x, y)</a>
- <a href="#winbox.resize">winbox.**resize**(width, height)</a>
- <a href="#winbox.close">winbox.**close**()</a>
- <a href="#winbox.focus">winbox.**focus**()</a>
- <a href="#winbox.hide">winbox.**hide**()</a>
- <a href="#winbox.show">winbox.**show**()</a>
- <a href="#winbox.minimize">winbox.**minimize**(state)</a>
- <a href="#winbox.maximize">winbox.**maximize**(state)</a>
- <a href="#winbox.fullscreen">winbox.**fullscreen**(state)</a>
- <a href="#winbox.setBackground">winbox.**setBackground**(string)</a>
- <a href="#winbox.setTitle">winbox.**setTitle**(string)</a>
- <a href="#winbox.setUrl">winbox.**setUrl**(string)</a>
- <a href="#winbox.addClass">winbox.**addClass**(name)</a>
- <a href="#winbox.removeClass">winbox.**removeClass**(name)</a>

Instance properties:

- <a href="#winbox.id">winbox.**id**</a>
- <a href="#winbox.body">winbox.**body**</a>
- <a href="#winbox.min">winbox.**min**</a>
- <a href="#winbox.max">winbox.**max**</a>
- <a href="#winbox.x">winbox.**x**</a>
- <a href="#winbox.y">winbox.**y**</a>
- <a href="#winbox.width">winbox.**width**</a>
- <a href="#winbox.height">winbox.**height**</a>
- <a href="#winbox.top">winbox.**top**</a>
- <a href="#winbox.right">winbox.**right**</a>
- <a href="#winbox.bottom">winbox.**bottom**</a>
- <a href="#winbox.left">winbox.**left**</a>

<a name="options" id="options"></a>
## Options

<table>
    <tr></tr>
    <tr>
        <td>Option</td>
        <td>Values</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>number | string</td>
        <td>Set a unique id to the window. Used to define custom styles in css, query elements by context or just to identify the corresponding window instance. If no ID was set it will automatically create one for you.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>index</td>
        <td>number</td>
        <td>Set the initial <code>z-index</code> of the window to this value (could be increased automatically when unfocused/focused).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>The window title.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>mount</td>
        <td>HTMLElement</td>
        <td>Mount an element (widget, template, etc.) to the window body.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>html</td>
        <td>string</td>
        <td>Set the <code>innerHTML</code> of the window body.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>url</td>
        <td>string</td>
        <td>Open URL inside the window (loaded via iframe).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>width<br>height</td>
        <td>number | string</td>
        <td>Set the initial width/height of the window (supports units "px" and "%").</td>
    </tr>
    <tr></tr>
    <tr>
        <td>x<br>y</td>
        <td>number | string</td>
        <td>Set the initial position of the window (supports: "right" for x-axis, "bottom" for y-axis, "center" for both, units "px" and "%" for both).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>max</td>
        <td>boolean</td>
        <td>Automatically toggles the window into maximized state when created.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>top<br>right<br>bottom<br>left</td>
        <td>number | string</td>
        <td>Set or limit the viewport of the window's available area (supports units "px" and "%").</td>
    </tr>
    <tr></tr>
    <tr>
        <td>background</td>
        <td>string</td>
        <td>Set the background of the window (supports all CSS styles which are also supported by the style-attribute "background", e.g. colors, transparent colors, hsl, gradients, background images)</td>
    </tr>
    <tr></tr>
    <tr>
        <td>border</td>
        <td>number</td>
        <td>Set the border width of the window (supports all css units, like px, %, em, rem, vh, vmax).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>class</td>
        <td>string</td>
        <td>Add one or more classnames to the window (multiple classnames as array or separated with whitespaces e.g. "class-a class-b"). Used to define custom styles in css, query elements by context (also within CSS) or just to tag the corresponding window instance.<br><br>WinBox provides you some useful <a href="#control-classes">Built-in Control Classes</a> to easily setup a custom configuration.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>modal</td>
        <td>boolean</td>
        <td>Shows the window as modal.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onmove</td>
        <td>function(x, y)</td>
        <td>Callback triggered when the window moves. The keyword <code>this</code> inside the callback function refers to the corresponding WinBox instance.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onresize</td>
        <td>function(width,&nbsp;height)</td>
        <td>Callback triggered when the window resizes. The keyword <code>this</code> inside the callback function refers to the corresponding WinBox instance.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onclose<br>onfocus<br>onblur</td>
        <td>function()</td>
        <td>Callbacks to several events (Note: the event 'onclose' will be triggered right before closing). The keyword <code>this</code> inside the callback function refers to the corresponding WinBox instance.</td>
    </tr>
</table>

## Create and Setup Window

<a name="winbox.new"></a>
#### Basic Window

> When no `root` was specified the window will append to the `document.body`.

```js
new WinBox("Window Title");
```

Alternatively:
```js
WinBox.new("Window Title");
```

Alternatively:
```js
new WinBox({ 
    title: "Window Title" 
});
```

Alternatively:
<a name="winbox.setTitle"></a>
```js
var winbox = WinBox();
winbox.setTitle("Window Title");
```

#### Custom Root

> The root is the unique element in a document where the window will append to. In most cases that is usually the `document.body` which is the default root. Multiple roots at the same time are just partially supported (they share the same viewport actually).

```js
new WinBox("Window Title", {
    root: document.body
});
```

#### Custom Color

> Supports all CSS styles which are also supported by the style-attribute "background", e.g. colors, transparent colors, hsl, gradients, background images.

```js
new WinBox("Custom Color", {
    background: "#ff005d"
});
```

Alternatively:
<a name="winbox.setBackground"></a>
```js
var winbox = new WinBox("Custom Color");
winbox.setBackground("#ff005d");
```

#### Custom Border

> Supports all units.

```js
new WinBox({
    title: "Custom Border",
    border: "1em"
});
```

You can also define multiple border values (the order is: top, right, bottom, left):
```js
new WinBox({
    title: "Custom Border",
    border: "0 1em 15px 1em"
});
```

####  Custom Viewport

> Define the available area (relative to the document) in which the window can move or could be resized (supports units "px" and "%").

```js
new WinBox("Custom Viewport", {
    top: "50px",
    right: "5%",
    bottom: 50,
    left: "5%"
});
```

Alternatively (just support numbers!):
```js
var winbox = new WinBox("Custom Viewport");

winbox.top = 50;
winbox.right = 200;
winbox.bottom = 0;
winbox.left = 200
```

<a name="winbox.move"></a><a name="winbox.resize"></a>
#### Custom Position / Size

> Supports "right" for x-axis, "bottom" for y-axis, "center" for both, units "px" and "%" also for both.

```js
new WinBox("Custom Viewport", {
    x: "center",
    y: "center",
    width: "50%",
    height: "50%"
});
```

```js
new WinBox("Custom Viewport", {
    x: "right",
    y: "bottom",
    width: "50%",
    height: "50%"
});
```

Alternatively (also supports same units as above):
```js
var winbox = new WinBox("Custom Viewport");

winbox.resize("50%", "50%")
      .move("center", "center");
```

Alternatively (just support numbers!):
```js
var winbox = new WinBox("Custom Viewport");

winbox.width = 200;
winbox.height = 200;
winbox.resize();

winbox.x = 100;
winbox.y = 100;
winbox.move();
```

#### Modal Window

```js
new WinBox({
    title: "Modal Window",
    modal: true
});
```

<a name="themes"></a>
#### Themes

> Feel free to create your own themes and share them with us.

You will find all themes <a href="https://github.com/nextapps-de/winbox/tree/master/dist/css/themes">here</a>.

Load the corresponding css files (or use a bundler), e.g.:

```html
<head>
    <link rel="stylesheet" href="dist/css/winbox.min.css">
    <link rel="stylesheet" href="dist/css/themes/modern.min.css">
    <script src="dist/js/winbox.min.js"></script>
</head>
```

Just add the name of the theme as a class:

```js
var winbox = new WinBox({
    title: "Theme: Modern",
    class: "modern"
});
```

Alternatively:

```js
var winbox = new WinBox("Theme: Modern");
winbox.addClass("modern");
```

You can change themes during the lifetime of the window.

## Manage Window Content

#### Set innerHTML

```js
new WinBox("Set innerHTML", {
    html: "<h1>Lorem Ipsum</h1>"
});
```

Alternatively:
```js
var winbox = new WinBox("Set innerHTML");
winbox.body.innerHTML = "<h1>Lorem Ipsum</h1>";
```

<a name="winbox.mount"></a>
#### Mount DOM (Cloned)

> By cloning you can easily create multiple window instances of the same content in parallel.

```html
<div id="content">
    <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum [...]</p>
</div>
```

```js
var node = document.getElementById("content");

new WinBox("Mount DOM", {
    mount: node.cloneNode(true)
});
```

Alternatively:
```js
var node = document.getElementById("content");
var winbox = new WinBox("Mount DOM");

winbox.mount(node.cloneNode(true));
```

#### Mount DOM (Singleton) + Auto-Unmount

> A singleton is a unique fragment which can move inside the document. When creating multiple windows and mounting the same fragment to it, the fragment will leave the old window (see the method above for cloning).

You can simply use a hidden backstore to hold contents, as well you can use any other strategy like a templating engine etc.

```html
<div id="backstore" style="display: none">
    <div id="content">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum [...]</p>
    </div>
</div>
```

```js
var node = document.getElementById("content");

new WinBox("Mount DOM", {
    mount: node
});
```

> Auto-Unmount is a great feature which automatically moves back the fragment to the backstore source when closing the window.

Alternatively:
```js
var node = document.getElementById("content");
var winbox = new WinBox("Mount DOM");

winbox.mount(node);
```

<a name="winbox.unmount"></a>
#### Explicit Unmount

```html
<div id="backstore" style="display: none">
    <div id="content">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum [...]</p>
    </div>
</div>
<div id="backstore-2" style="display: none"></div>
```

```js
var node = document.getElementById("content");
var winbox = new WinBox("Mount DOM");
```

Move fragment from hidden backstore to the window body:

```js
winbox.mount(node);
```

Move fragment back to the hidden backstore source:

```js
winbox.unmount();
```

Or move fragment to another destination:

```js
winbox.unmount(document.getElementById("backstore-2"));
```

Or just auto-unmount as default when closing:

```js
winbox.close();
```

Override default auto-unmount behavior when closing the window:

```js
new WinBox("Mount DOM", {
    mount: node,
    onclose: function(){
        this.unmount(document.getElementById("backstore-2"));
    }
});
```

#### Manual Mount

Feel free to use the `winbox.body` directly:
```js
var node = document.getElementById("content");
var winbox = new WinBox("Mount DOM");

winbox.body.appendChild(node);
```

Or delegate it as a root to your templating engine, e.g.:
```js
Mikado(template).mount(winbox.body).render(data);
```

#### Open URI / URL

> You can use every URI scheme which is supported by `src` attribute, e.g. URL, image or video, base64 encoded data.

```js
new WinBox("Open URL", {
    url: "https://wikipedia.com"
});
```

Alternatively:
<a name="winbox.setUrl"></a>
```js
var winbox = new WinBox("Open URL");
winbox.setUrl("https://wikipedia.com");
```

## The Window Instance

<a name="winbox.id"></a><a name="winbox.max"></a><a name="winbox.min"></a>
Window States / Information:
```js
var winbox = new WinBox();

console.log("Window ID:", winbox.id);
console.log("Current Maximize State:", winbox.max);
console.log("Current Minimize State:", winbox.min);
```

<a name="winbox.width"></a><a name="winbox.height"></a>
Window Size:
```js
var winbox = new WinBox();

winbox.width = 200;
winbox.height = 200;
winbox.resize();

console.log("Current Width:", winbox.width);
console.log("Current Height:", winbox.height);
```

<a name="winbox.x"></a><a name="winbox.y"></a>
Window Position:
```js
var winbox = new WinBox();

winbox.x = 100;
winbox.y = 100;
winbox.move();

console.log("Current Position X:", winbox.x);
console.log("Current Position Y:", winbox.y);
```

<a name="winbox.top"></a><a name="winbox.right"></a><a name="winbox.bottom"></a><a name="winbox.left"></a>
Window Viewport:
```js
var winbox = new WinBox();

winbox.top = 50;
winbox.right = 50;
winbox.bottom = 50;
winbox.left = 50;


console.log("Current Viewport Top:", winbox.top);
console.log("Current Viewport Right:", winbox.right);
console.log("Current Viewport Bottom:", winbox.bottom);
console.log("Current Viewport Left:", winbox.left);
```

<a name="winbox.body"></a>
The window body acts like the `document.body` and has a scroll pane:
```js
var winbox = new WinBox();
winbox.body.innerHTML = "<h1>Lorem Ipsum</h1>";
```

> The parent element of the window body `winbox.body.parentNode` points to the window most outer root element which also holds the window control and state classes:

```js
const root = winbox.body.parentNode;
const hidden = root.classList.contains("hide");
const focused = root.classList.contains("focus");
```

```js
const root = winbox.body.parentNode;
root.classList.remove("modal");
root.classList.add("my-theme");
```

When changing classes you can use the WinBox built-in methods:
```js
winbox.removeClass("modal");
winbox.addClass("my-theme");
```

#### Controls

```js
var winbox = new WinBox();
```

<a name="winbox.focus"></a>
Focus a window (bring up to front):
```js
winbox.focus();
```

<a name="winbox.minimize"></a>
Toggle the minimized state of a window:
```js
winbox.minimize();
```

Explicitly set the minimized state of a window:
```js
winbox.minimize(true);
winbox.minimize(false);
```

<a name="winbox.maximize"></a>
Toggle the maximized state of a window:
```js
winbox.maximize();
```

Explicitly set the maximized state of a window:
```js
winbox.maximize(true);
winbox.maximize(false);
```

<a name="winbox.fullscreen"></a>
Toggle the fullscreen state of a window:
```js
winbox.fullscreen();
```

Explicitly set the fullscreen state of a window:
```js
winbox.fullscreen(true);
winbox.fullscreen(false);
```

<a name="winbox.hide"></a>
Hide a specific window:
```js
winbox.hide();
```

<a name="winbox.show"></a>
Show a specific hidden window:
```js
winbox.show();
```

<a name="winbox.close"></a>
Close and destroy a window:
```js
winbox.close();
```

#### Chaining Methods

```js
var winbox = WinBox();

winbox.setTitle("Title")
      .setBackground("#fff")
      .resize("50%", "50%")
      .move("center", "center")
      .mount(document.getElementById("content"));
```

> When using "center" as position you need to call `resize()` before `move()`.

<a name="control-classes" id="control-classes"></a>
#### Use Control Classes

WinBox provides you some built-in control classes you can pass when creating a window instance. 

> All control classes from this list could be added or removed during lifetime of the window (after creation). State classes like "max", "min" and "focus" could not be changed manually.

<table>
    <tr></tr>
    <tr>
        <td>Classname&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>no-animation</td>
        <td>Disables the windows transition animation</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-shadow</td>
        <td>Disables the windows drop shadow</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-header</td>
        <td>Hide the window header incl. title and toolbar</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-min</td>
        <td>Hide the minimize icon</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-max</td>
        <td>Hide the maximize icon</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-full</td>
        <td>Hide the fullscreen icon</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-close</td>
        <td>Hide the close icon</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-resize</td>
        <td>Disables the window resizing capability</td>
    </tr>
    <tr></tr>
    <tr>
        <td>no-move</td>
        <td>Disables the window moving capability</td>
    </tr>
</table>

Also, only this two css-only state classes could be toggled programmatically:

<table>
    <tr></tr>
    <tr>
        <td>Classname&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>modal</td>
        <td>Show the window in modal mode</td>
    </tr>
    <tr></tr>
    <tr>
        <td>hide</td>
        <td>Hide the window</td>
    </tr>
</table>

> Without the header the user isn't able to move the window frame. It may be useful for creating fixed popups.

Pass in classnames when creating the window to apply behaviour:
```js
const winbox = WinBox({
    class: [
        "no-min",
        "no-max",
        "no-full",
        "no-resize",
        "no-move"
    ]
});
```

> The example above is a good start to create classical popups.

Alternatively you can use a whitespace separated string:
```js
const winbox = WinBox({
    class: "no-min no-max no-full no-resize no-move"
});
```

<a name="winbox.addClass"></a><a name="winbox.removeClass"></a>
You can add or remove all control classes from above along the window's lifetime:

```js
const winbox = WinBox();

winbox.addClass("no-resize")
      .addClass("no-move");
```
```js
winbox.removeClass("no-resize")
      .removeClass("no-move");
```

<a name="customize"></a>
## Customize Window

> Additionally, take a look into the <a href="https://github.com/nextapps-de/winbox/tree/master/src/css/themes">themes folder</a> to get some ideas how to customize the window.

The window boilerplate:

<img src="https://cdn.jsdelivr.net/gh/nextapps-de/winbox@master/demo/boilerplate.svg?v=4" width="100%" alt="WinBox Boilerplate">

Hide or disable specific icons:
```css
.wb-min   { display: none }
.wb-full  { display: none }
.wb-max   { display: none }
.wb-close { display: none }
```

Modify a specific icon:
```css
.wb-max {
    background-image: url(src/img/max.png);
    background-position: center;
    background-size: 15px auto;
}
```

Use black standard icons (useful for bright backgrounds):
```css
.wb-icon { filter: invert(1) }
```

Modify or disable resizing areas on the window borders:
```css
/* north */
.wb-n  { display: none }

/* east */
.wb-e  { display: none }

/* south */
.wb-s  { display: none }

/* west */
.wb-w  { display: none }

/* north-west */
.wb-nw { display: none }

/* north-east */
.wb-ne { display: none }

/* south-west */
.wb-sw { display: none }

/* south-east */
.wb-se { display: none }
```

Modify or disable the window drop shadow:
```css
.winbox { box-shadow: none }
```

Style the header title:
```css
.wb-title { font-size: 12px }
```

Style the window background (frame):
```css
.winbox {
    background: linear-gradient(90deg, #ff00f0, #0050ff);
    border-radius: 12px 12px 0 0;
}
```

Style the body of a window element and set the frame border:
```css
.wb-body {
    /* the width of window frame border: */
    margin: 4px;
    color: #fff;
    background: #131820;
}
```

> The margin of `.wb-body` corresponds to the width of the window border.

Apply styles when window is in "minimized" state:
```css
.winbox {
    border-radius: 10px;
}
.winbox.min {
    border-radius: 0;
}
.winbox.min .windbox-title {
    font-size: 12px;
}
```

Apply styles when window is NOT in "minimized" state:
```css
.winbox:not(.min) {
    /* apply styles */
}
```

Apply styles when window is in "maximized" state:
```css
.winbox {
    border-radius: 10px;
}
.winbox.max {
    border-radius: 0;
}
.winbox.max .wb-max {
    opacity: 0.5;
}
```

Apply styles when window is NOT in "maximized" state:
```css
.winbox:not(.max) {
    /* apply styles */
}
```

Apply styles when window is in "fullscreen" state:
```css
.wb-body:fullscreen {
    /* apply styles */
}
```

Apply styles when window is in "focus" state:
```css
.winbox {
    background: #999;
}
.winbox.focus {
    background: #0050ff; 
}
.winbox .wb-icon {
    display: none;
}
.winbox.focus .wb-icon {
    display: block;
}
```

Apply styles when window is NOT in "focus" state (the same logic from example above, but shorter):
```css
.winbox:not(.focus) {
    background: #999;
}
.winbox:not(.focus) .wb-icon {
    display: none;
}
```

Apply styles when window is in "modal" state:
```css
.winbox.modal .wb-close { display: none }
```

Customize the modal background overlay:
```css
.winbox.modal:after {
    background: #0d1117;
    opacity: 0.5;
    animation: none;
}
```

#### Style Scrollbars

```css
.wb-body::-webkit-scrollbar {
    width: 12px;
}
.wb-body::-webkit-scrollbar-track {
    background: transparent;
}
.wb-body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #263040;
}
.wb-body::-webkit-scrollbar-thumb:window-inactive {
    background: #181f2a;
}
.wb-body::-webkit-scrollbar-corner {
    background: transparent;
}
```

## Useful Hints

Often you need to hide specific content parts when it was mounted to a window. You can solve this easily by using some css:

```css
.winbox .wb-hide { display: none }
```

The same for hiding when NOT inside a window:

```css
.wb-show { display: none }
.winbox .wb-show { display: block }
```

Now you can add this two classes to any element to control visibility between the two states "inside" and "outside" a window:

```html
<body>
    <main id="content">
        <header class="wb-hide">Hide this header when in windowed mode</header>
        <section>
            <!-- page contents -->
        </section>
        <footer class="wb-show">Hide this footer when NOT in windowed mode</footer>
    </main>
</body>
```

The property `display: block` might not fit your needs. That's why this workaround was not added as one of the built-in classes yet. Please change to your desired display-state accordingly.

```js
new WinBox({
    mount: document.getElementById("content")
});
```

#### Best Practices

- Use a non-scrolling body element to get the best user experience.
- Provide an alternative view strategy for mobile devices, e.g. when the device is a touch device then open a classical app view. If a mouse pointer is available mount this view to the WinBox window. Also, you can place a switch button in your application where the user can also toggles between these two modes.

## Custom Builds

Go to the root directory of WinBox and run:
```cmd
npm install
```

Perform a build:
```cmd
npm run build
```

The final build is located in the `dist/` folder.

---


Copyright 2021 Nextapps GmbH<br>
Released under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0 License</a><br>
