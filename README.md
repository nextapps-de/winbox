<h1>
    <img src="https://cdn.jsdelivr.net/gh/nextapps-de/winbox@master/demo/winbox-gradient.svg" alt="WinBox.js: A modern HTML5 window manager for the web." width="100%">
</h1>
<h3>Modern window manager for the web: lightweight, outstanding performance, no dependencies, fully customizable, open source!</h3>

<a target="_blank" href="https://www.npmjs.com/package/winbox"><img src="https://img.shields.io/npm/v/winbox.svg"></a><!--<a target="_blank" href="https://github.com/nextapps-de/winbox/issues"><img src="https://img.shields.io/github/issues/nextapps-de/winbox.svg"></a>-->
<a target="_blank" href="https://github.com/nextapps-de/winbox/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/winbox.svg"></a>

<a href="https://nextapps-de.github.io/winbox/">Demo</a> &ensp;&bull;&ensp; <a href="#started">Getting Started</a> &ensp;&bull;&ensp; <a href="#options">Options</a> &ensp;&bull;&ensp; <a href="#api">API</a> &ensp;&bull;&ensp; <a href="#themes">Themes</a> &ensp;&bull;&ensp; <a href="#customize">Customize</a> &ensp;&bull;&ensp; <a href="CHANGELOG.md">Changelog</a>

<a name="demo"></a>
### Live Demo and Code Examples

<a href="https://nextapps-de.github.io/winbox/">https://nextapps-de.github.io/winbox/ </a>

<a name="addon"></a>
### Plugins / Add-ons / Extensions
Vue 2 and 3 (a wrapper component that adds the ability to mount Vue components in WinBox.js):<br>
<a href="https://github.com/wobsoriano/vue-winbox">https://github.com/wobsoriano/vue-winbox </a><br>

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
        <td>winbox.bundle.min.js</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.2.5/dist/winbox.bundle.min.js" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/dist/winbox.bundle.min.js" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/dist/winbox.bundle.min.js</a></td>
    </tr>
    <tr>
        <td colspan=3">
            <br><b><u>Non-Bundled:</u></b> (js and css are separated, css includes icons as base64)
        </td>
    </tr>
    <tr>
        <td>winbox.min.js</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.2.5/dist/js/winbox.min.js" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/dist/js/winbox.min.js" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/dist/js/winbox.min.js</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>winbox.min.css</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.2.5/dist/css/winbox.min.css" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/dist/css/winbox.min.css" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/dist/css/winbox.min.css</a></td>
    </tr>
    <tr>
        <td colspan=3">
            <br><b><u>Sources:</u></b> (not bundled at all, images as url to original resources)
        </td>
    </tr>
    <tr>
        <td>ES6 Modules</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.2.5/src/js" target="_blank">Download</a></td>
        <td>The <i>/src/js</i> folder of this Github repository</td>
    </tr>
    <tr></tr>
    <tr>
        <td>LESS Files (source)</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.2.5/src/css" target="_blank">Download</a></td>
        <td>The <i>/src/css</i> folder of this Github repository</td>
    </tr>
    <tr></tr>
    <tr>
        <td>winbox.css (compiled)</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.2.5/src/css/winbox.css" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/src/css/winbox.css" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.2.5/src/css/winbox.css</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>src.zip</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.2.5/dist" target="_blank">Download</a></td>
        <td>Download all source files including image original resources.</td>
    </tr>
</table>

__Get Latest (NPM):__

```cmd
npm install winbox
```

### Use Bundled Version (Recommended)

> The bundled version includes all assets like js, css, html and icon images as base64.

A best practice is to load the library as async and use some modern preloading mechanism:

```html
<html>
<head>
    <link rel="preload" href="winbox.bundle.min.js" as="script">
</head>
<body>
    <!--
    
    HTML CONTENT
    
    -->
    <!-- BOTTOM OF BODY -->
    <script src="winbox.bundle.min.js" async></script>
    <!-- YOUR SCRIPT -->
    <script src="my-script.js" defer></script>
</body>
</html>
```

When you get troubles with unavailable references then remove the `async` or `defer` from this example and invest some minutes later to find out how you can properly load js assets asynchronously today.

### Use Non-Bundled Version

The non-bundled version needs to load js and css separately (css already includes icons as base64).

```html
<html>
<head>
    <link rel="stylesheet" href="winbox.min.css">
    <script src="winbox.min.js"></script>
</head>
<body></body>
</html>
```

You can also load the non-bundled version in the same way.

### ES6 Modules

The ES6 modules are located in `src/js/`. But you need to load the stylesheet file explicitly since this is just automatically loaded by the bundled version.

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
  import WinBox from "https://unpkg.com/winbox@0.2.5/src/js/winbox.js";
</script>
```

The ES6 modules are not minified. Please use your favored bundler or build tool for this purpose.

<a name="api"></a>
## Overview

Constructor:

- new <a href="#winbox.new">**WinBox**(title, options\<key: value\>)</a> : winbox

Global methods:

- <a href="#winbox.new">WinBox.**new**(title, options\<key: value\>)</a> : winbox

Instance member methods:

- <a href="#winbox.mount">winbox.**mount**(src)</a>
- <a href="#winbox.unmount">winbox.**unmount**(dest)</a>
- <a href="#winbox.setUrl">winbox.**setUrl**(string)</a>
- <a href="#winbox.setTitle">winbox.**setTitle**(string)</a>
- <a href="#winbox.setIcon">winbox.**setIcon**(url)</a>
- <a href="#winbox.move">winbox.**move**(x, y)</a>
- <a href="#winbox.resize">winbox.**resize**(width, height)</a>
- <a href="#winbox.close">winbox.**close**(boolean)</a>
- <a href="#winbox.focus">winbox.**focus**(state)</a>
- <a href="#winbox.blur">winbox.**blur**(state)</a>
- <a href="#winbox.hide">winbox.**hide**(state)</a>
- <a href="#winbox.show">winbox.**show**(state)</a>
- <a href="#winbox.minimize">winbox.**minimize**(state)</a>
- <a href="#winbox.maximize">winbox.**maximize**(state)</a>
- <a href="#winbox.fullscreen">winbox.**fullscreen**(state)</a>
- <a href="#winbox.restore">winbox.**restore**(state)</a>
- <a href="#winbox.setBackground">winbox.**setBackground**(string)</a>
- <a href="#winbox.addClass">winbox.**addClass**(name)</a>
- <a href="#winbox.removeClass">winbox.**removeClass**(name)</a>
- <a href="#winbox.hasClass">winbox.**hasClass**(name)</a>
- <a href="#winbox.toggleClass">winbox.**toggleClass**(name)</a>
- <a href="#winbox.addControl">winbox.**addControl**(options)</a>
- <a href="#winbox.removeControl">winbox.**removeControl**(name)</a>

Instance properties (readonly):

- <a href="#winbox.id">winbox.**id**</a>
- <a href="#winbox.index">winbox.**index**</a>
- <a href="#winbox.window">winbox.**window**</a>
- <a href="#winbox.body">winbox.**body**</a>

Instance properties (writable):

- <a href="#winbox.x">winbox.**x**</a>
- <a href="#winbox.y">winbox.**y**</a>
- <a href="#winbox.width">winbox.**width**</a>
- <a href="#winbox.height">winbox.**height**</a>
- <a href="#winbox.top">winbox.**top**</a>
- <a href="#winbox.right">winbox.**right**</a>
- <a href="#winbox.bottom">winbox.**bottom**</a>
- <a href="#winbox.left">winbox.**left**</a>
- <a href="#winbox.minwidth">winbox.**minwidth**</a>
- <a href="#winbox.minheight">winbox.**minheight**</a>
- <a href="#winbox.maxwidth">winbox.**maxwidth**</a>
- <a href="#winbox.maxheight">winbox.**maxheight**</a>

Instance state boolean properties (readonly):

- <a href="#winbox.min">winbox.**min**</a>
- <a href="#winbox.max">winbox.**max**</a>
- <a href="#winbox.full">winbox.**full**</a>
- <a href="#winbox.hidden">winbox.**hidden**</a>
- <a href="#winbox.focused">winbox.**focused**</a>

Callback methods:

- <a href="#winbox.oncreate">winbox.**oncreate**</a>
- <a href="#winbox.onshow">winbox.**onshow**</a>
- <a href="#winbox.onhide">winbox.**onhide**</a>
- <a href="#winbox.onclose">winbox.**onclose**</a>
- <a href="#winbox.onfocus">winbox.**onfocus**</a>
- <a href="#winbox.onblur">winbox.**onblur**</a>
- <a href="#winbox.onmove">winbox.**onmove**</a>
- <a href="#winbox.onresize">winbox.**onresize**</a>
- <a href="#winbox.onfullscreen">winbox.**onfullscreen**</a>
- <a href="#winbox.onmaximize">winbox.**onmaximize**</a>
- <a href="#winbox.onminimize">winbox.**onminimize**</a>
- <a href="#winbox.onrestore">winbox.**onrestore**</a>

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
        <td>Set the initial <code>z-index</code> of the window to this value (will be increased automatically when unfocused/focused).</td>
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
        <td>minwidth<br>minheight</td>
        <td>number | string</td>
        <td>Set the minimal width/height of the window (supports units "px" and "%"). Should be at least the height of the window header title bar.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>maxwidth<br>maxheight</td>
        <td>number | string</td>
        <td>Set the maximum width/height of the window (supports units "px" and "%").</td>
    </tr>
    <tr></tr>
    <tr>
        <td>autosize</td>
        <td>boolean</td>
        <td>Automatically size the window to fit the window contents.</td>
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
        <td>min</td>
        <td>boolean</td>
        <td>Automatically toggles the window into minimized state when created.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>hidden</td>
        <td>boolean</td>
        <td>Automatically toggles the window into hidden state when created.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>modal</td>
        <td>boolean</td>
        <td>Shows the window as modal.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>top<br>right<br>bottom<br>left</td>
        <td>number | string</td>
        <td>Set or limit the viewport of the window's available area (supports units "px" and "%"). Also used for custom splitscreen configurations.</td>
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
        <td>Set the border width of the window (supports all the browsers css units).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>icon</td>
        <td>string</td>
        <td>Make the titlebar icon visible and set the image source to this url.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>class</td>
        <td>string</td>
        <td>Add one or more classnames to the window (multiple classnames as array or separated with whitespaces e.g. "class-a class-b"). Used to define custom styles in css, query elements by context (also within CSS) or just to tag the corresponding window instance.<br><br>WinBox provides you some useful <a href="#control-classes">Built-in Control Classes</a> to easily setup a custom configuration.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>oncreate</td>
        <td>function(options)</td>
        <td>Callback triggered when the winbox element is being created. You can modify all these winbox options from this table passed as first parameter.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onmove</td>
        <td>function(x, y)</td>
        <td>Callback triggered when the window moves.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onresize</td>
        <td>function(width,&nbsp;height)</td>
        <td>Callback triggered when the window resizes.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onfullscreen</td>
        <td>function()</td>
        <td>Callback triggered when the window enters fullscreen.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onminimize</td>
        <td>function()</td>
        <td>Callback triggered when the window enters minimized mode.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onmaximize</td>
        <td>function()</td>
        <td>Callback triggered when the window enters maximize mode.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onrestore</td>
        <td>function()</td>
        <td>Callback triggered when the window returns to a windowed state from a Fullscreen, Minimized or Maximized state.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onhide</td>
        <td>function()</td>
        <td>Callback triggered when the window is hidden with win.hide()</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onshow</td>
        <td>function()</td>
        <td>Callback triggered when the window is shown with win.show()</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onclose</td>
        <td>function(force)</td>
        <td>Callbacks triggered when the window is closing. The keyword <code>this</code> inside the callback function refers to the corresponding WinBox instance. Note: the event 'onclose' will be triggered right before closing and stops closing when a callback was applied and returns a truthy value.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onfocus</td>
        <td>function()</td>
        <td>Callback triggered when a window goes into focused state.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onblur</td>
        <td>function()</td>
        <td>Callback triggered when a window lost the focused state.</td>
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
new WinBox({ title: "Window Title" });
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

> Supports all CSS styles which are also supported by the style-attribute "background", e.g. colors, rgba, hsl, gradients, background images.

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

#### Custom Titlebar Icon

> Supports all datatypes which are also supported by the style-attribute "background-image", e.g. URL, base64 encoded data. The default icon size is 20 x 20 pixels.

```js
new WinBox({
    title: "Custom Icon",
    icon: "img/icon.svg"
});
```

Alternatively:
<a name="winbox.setIcon"></a>
```js
var winbox = new WinBox("Custom Icon");
winbox.setIcon("img/icon.svg");
```

See below in the style section to find out how to easily customize the titlebar icon style via css.

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

Alternatively (but just support numbers!):
```js
var winbox = new WinBox("Custom Viewport");

winbox.top = 50;
winbox.right = 200;
winbox.bottom = 0;
winbox.left = 200
```

<a name="winbox.move"></a><a name="winbox.resize"></a>
#### Custom Position / Size

> Supports keywords `"right"` for x-axis, `"bottom"` for y-axis, `"center"` for both, units `px` and `%` also for both.

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
    width: "200px",
    height: "200px"
});
```

Alternatively (also supports same units and keywords as above):
```js
var winbox = new WinBox("Custom Viewport");

winbox.resize("50%", "50%")
      .move("center", "center");
```

Alternatively (just support numeric values as `px` when directly assigned!):
```js
var winbox = new WinBox("Custom Viewport");

winbox.width = 200;
winbox.height = 200;
winbox.resize();

winbox.x = 100;
winbox.y = 100;
winbox.move();
```

> In some cases you need to execute `.resize()` before `.move()` to properly apply relative positions which is taking the windows size into account.

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

Just add the name of the theme via `class`:

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

> Do not forget to sanitize any user inputs which is part of the __html__ as this can lead to unintended XSS!

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

> When cloning you can easily create multiple window instances of the same content in parallel.

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

> This workaround is also compatible if you are using server-side rendering.

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

> Auto-Unmount is a helpful feature which automatically moves back the fragment to the backstore source when closing the window.

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

#### Manual Mount Contents

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

> Do not forget to sanitize any user inputs when it is part of the __url__ as this can lead to unintended XSS!

The onload callback is optionally.
```js
new WinBox("Open URL", {
    url: "https://wikipedia.com",
    onload: function(){ /* extern page loaded */}
});
```

> You can use every URI scheme which is supported by `src` attribute, e.g. URL, image or video, base64 encoded data.

Alternatively:
<a name="winbox.setUrl"></a>
```js
var winbox = new WinBox("Open URL");
winbox.setUrl("https://wikipedia.com", function(){ 
    /* extern page loaded */
});
```

## The WinBox Window Instance

<a name="winbox.id"></a><a name="winbox.max"></a><a name="winbox.min"></a><a name="winbox.full"></a><a name="winbox.hidden"></a><a name="winbox.focused"></a>
Window States / Information:
```js
var winbox = new WinBox();

console.log("Window ID:", winbox.id);
console.log("Window Index:", winbox.index);
console.log("Current Maximize State:", winbox.max);
console.log("Current Minimize State:", winbox.min);
console.log("Current Fullscreen State:", winbox.full);
console.log("Current Hidden State:", winbox.hidden);
console.log("Current Focused State:", winbox.focused);
```

<a name="winbox.width"></a><a name="winbox.height"></a><a name="winbox.resize"></a>
Window Size:
```js
var winbox = new WinBox();

winbox.width = 200;
winbox.height = 200;
winbox.resize();

console.log("Current Width:", winbox.width);
console.log("Current Height:", winbox.height);
```

<a name="winbox.x"></a><a name="winbox.y"></a><a name="winbox.move"></a>
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

// update window if needed:
winbox.resize().move();

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

<a name="winbox.window"></a>
Get the DOM element from the window outer frame:
```js
var winbox = new WinBox();
var root = winbox.window;
```

You also can get the window element by DOM id:
```js
var winbox = new WinBox();
var root = document.getElementById(winbox.id);
```

> The window element points to the window most outer root element which also holds the window control and state classes:

You can access and modify the window DOM element directly:

```js
const root = winbox.window;
const hidden = root.classList.contains("hide");
const focused = root.classList.contains("focus");
root.classList.remove("modal");
root.classList.add("my-theme");
root.classList.toggle("my-toggle");
```

Or as an equivalent to the example above by using the WinBox built-in methods respectively:

```js
const hidden = winbox.hasClass("hide");
const focused = winbox.hasClass("focus");
winbox.removeClass("modal");
winbox.addClass("my-theme");
winbox.toggleClass("my-toggle");
```

You can grab the `winbox` instance from the window outer frame DOM element:
```js
var winbox = new WinBox();
// assume you have a DOM reference to the winbox window:
var window_element = document.getElementById(winbox.id);
// grab corresponding instance from window element:
winbox = window_element.winbox;
```

#### Controls

```js
var winbox = new WinBox();
```

<a name="winbox.focus"></a>
Focus a window (bring up to front):
```js
winbox.focus();
winbox.focus(true);
winbox.blur(false);
```

<a name="winbox.blur"></a>
Blur a focused window:
```js
winbox.blur();
winbox.blur(true);
winbox.focus(false);
```

<a name="winbox.minimize"></a>
Set the minimized state of a window:
```js
winbox.minimize();
winbox.minimize(true);
winbox.minimize(false);
```

<a name="winbox.maximize"></a>
Set the maximized state of a window:
```js
winbox.maximize();
winbox.maximize(true);
winbox.maximize(false);
```

<a name="winbox.fullscreen"></a>
Set the fullscreen state of a window:
```js
winbox.fullscreen();
winbox.fullscreen(true);
winbox.fullscreen(false);
```

<a name="winbox.restore"></a>
Restore the state of a window:
```js
winbox.restore();
```

<a name="winbox.hide"></a>
Hide a specific window:
```js
winbox.hide();
winbox.hide(true);
winbox.show(false);
```

<a name="winbox.show"></a>
Show a specific hidden window:
```js
winbox.show();
winbox.show(true);
winbox.hide(false);
```

<a name="winbox.close"></a>
Close and destroy a window:
```js
winbox.close();
```

<a name="winbox.close"></a>
Close and destroy a window depending on custom conditional (e.g. by a confirmation status):
```js
winbox.close(false || true);
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

> When using "center" as position you need to call `.resize()` before `.move()`.

#### Callbacks

You can assign callbacks via the option payload when creating a window.

> The keyword `this` in your callback function refers to the corresponding WinBox Instance.

```js
var winbox = WinBox({
    oncreate: function(options){
        options.autosize = true;
    },
    onfocus: function(){
        this.setBackground("#fff");
    },
    onblur: function(){
        this.setBackground("#999");
    },
    onresize: function(width, height){
        console.log("width:", width, "height:", height);
    },
    onfullscreen: function(){
        this.setBackground("#666");
    },
    onminimize: function(){
        this.setBackground("#999");
    },
    onmaximize: function(){
        this.setBackground("#AAA");
    },
    onrestore: function(){
        this.setBackground("#DDD");
    },    
    onmove: function(x, y){
        console.log("x:", x, "y:", y);
    },
    onclose: function(force){
        // return "true" to skip the closing
        // return "false" to allow closing
        // use delegated force parameter optionally
        return !confirm("Close window?");
    }
});
```

#### The "onclose" callback

> The event `onclose` will be triggered right before closing and __stops__ closing when a callback was applied and returns a __truthy value__.

Within your callback function just return `true` to stops the closing or return `false` to perform closing as default.
```js
new WinBox({ 
    onclose: function(){
        // return "true" to skip the closing
        // return "false" to allow closing
        if(do_some_checks()){
            return true;
        }
    } 
});
```

The `force` parameter from the `winbox.close(boolean)` will be delegated to your callback function as the first parameter. You need to handle the "force" state in your callback function.

```js
var winbox = WinBox({ 
    onclose: function onclose(force){
        // use delegated force parameter optionally
        return !force && !confirm("Close window?");
    } 
});
```

Close the window and execute callback as default (will show the prompt from example above):
```js
winbox.close();
```

Force closing the window (does not show the prompt from example above):
```js
winbox.close(true);
```

<a name="control-classes" id="control-classes"></a>
#### Use Control Classes

WinBox provides you some built-in control classes you can pass when creating a window instance. 

> All control classes from this list could be added or removed during lifetime of the window (after creation). State classes like `max`, `min`, `full`, `hidden` and `focus` could not be changed manually! For this purpose use the WinBox member methods accordingly e.g. `maximize()`, `minimize()`, `hide()`.

<table>
    <tr></tr>
    <tr>
        <th>Classname&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th align="left">Description</th>
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

> Without the header the user isn't able to move the window frame. It may be useful for creating fixed popups.

Pass in classnames when creating the window to apply behaviour:
```js
const winbox = WinBox({
    class: [ "no-min", "no-max", "no-full", "no-resize", "no-move" ]
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
```js
winbox.toggleClass("no-resize")
      .toggleClass("no-move");
```
```js
const state = winbox.hasClass("no-resize") &&
              winbox.hasClass("no-move");
```

## Custom Splitscreen

Use the viewport limit to define your own splitscreen areas, e.g. for a simple vertical split:

```js
new WinBox("Split Left", {
    right: "50%"
});

new WinBox("Split Right", {
    left: "50%"
});
```

Same way you can also define custom sizes and positions for each split as well as complex grids, e.g.:

```js
new WinBox("Split Top-Left", { right: "66%", bottom: "50%", max: true });
new WinBox("Split Bottom-Left", { right: "66%", top: "50%", max: true });

new WinBox("Split Middle", { left: "34%", right: "34%", max: true });

new WinBox("Split Top-Right", { left: "66%", bottom: "50%", max: true });
new WinBox("Split Bottom-Right", { left: "66%", top: "50%", max: true });
```

The splitscreen from above will look like this grid:

```
---------------------------------------------
|             |              |              |
|             |              |              |
|  Top Left   |              |  Top Right   |
|             |              |              |
|             |              |              |
---------------    Middle    ----------------
|             |              |              |
|             |              |              |
| Bottom Left |              | Bottom Right |
|             |              |              |
|             |              |              |
---------------------------------------------
```

You can set the values for the viewport dynamically, doing this makes it possible to size the grid dynamically and also change the grid schema.

<a name="winbox.addControl"></a>
## Custom Controls

This example will add a custom control button `.wb-like` to the window heading toolbar along some CSS for icon styling:
```css
.wb-like {
    background-size: 20px auto;
}
.wb-like.active {
    background-image: url(demo/heart-filled.svg) !important;
}
```

Attach a control to the window toolbar:
```js
winbox.addControl({
    // the position index
    index: 1,
    // classname to apply styling
    class: "wb-like",
    // icon url when not specified via classname
    image: "demo/heart.svg",
    // click listener
    click: function(event, winbox){
        // the winbox instance will be passed as 2nd parameter
        console.log(winbox.id);
        // "this" refers to the button which was clicked:
        this.classList.toggle("active");
    }
});
```

<a name="winbox.removeControl"></a>
Remove a control from the window toolbar:
```js
winbox.removeControl("wb-like")
      .removeControl("wb-min");
```

<a name="template"></a>
## Custom Template (Layout)

You can fully customize the WinBox window layout by providing a custom `template` via the config during creation. This way you can add new elements to the window or re-arrange them.

This example will add a control button `.wb-custom` to the window toolbar by using a custom template along some CSS:
```css
.wb-custom {
    background-image: url(demo/icon-github.svg);
    background-size: 17px auto;
}
```

Create by using a custom template:
```js
const template = document.createElement("div");
template.innerHTML = `
    <div class=wb-header>
        <div class=wb-control>
            <span class=wb-custom></span>
            <span class=wb-close></span>
        </div>
        <div class=wb-drag></div>
    </div>
    <div class=wb-body></div>
`;

new WinBox("Custom Template", { template });
```

> The `.wb-drag` element needs to be existing when the user should be able to move the window by dragging the heading toolbar.

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
.wb-control { filter: invert(1) }
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

Style the titlebar icon:
```css
.wb-icon {
    width: 35px;
    background-size: 35px 35px;
}
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
.winbox .wb-control {
    display: none;
}
.winbox.focus .wb-control {
    display: block;
}
```

Apply styles when window is NOT in "focus" state (the same logic from example above, but shorter):
```css
.winbox:not(.focus) {
    background: #999;
}
.winbox:not(.focus) .wb-control {
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

Often you need to hide specific content parts when it was mounted to a window or hiding when NOT inside a window:

Now you can add the two classes `"wb-hide"` and `"wb-show"` to any element to control visibility between the two states "inside" and "outside" a window:

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

The `display` property when using `"wb-show"` might not fit your needs. Please change this css class definition to your desired display-state accordingly.

```js
new WinBox({
    mount: document.getElementById("content")
});
```

#### Best Practices

- Use a non-scrolling body element to get the best user experience on mobile devices.
- Or provide an alternative view strategy for mobile devices, e.g. when the device is a touch device then open a classical app view. If a mouse pointer is available, then mount this view to the WinBox window. Also, you can place a switch button in your application where the user can also toggle between these two modes.

## WinBox on Angular application

Step 1: Install WinBox library

```
npm i winbox
```

Step 2: Install WinBox types

```
npm i @types/winbox --save-dev
```

Step 3: Import WinBox in a component

```ts
import { Component } from '@angular/core';
import 'winbox';
declare const WinBox: WinBox.WinBoxConstructor;

@Component({
  selector: 'my-app',
  template: '<button (click)="openWindow()">Open Window</button>'
})
export class AppComponent {
  openWindow() {
    WinBox.new();
  }
}
```

## WinBox on Vue application

https://github.com/wobsoriano/vue-winbox

It uses the native [teleport](https://v3.vuejs.org/api/built-in-components.html#teleport) component in Vue 3 and recommends https://github.com/LinusBorg/vue-simple-portal for Vue 2 users.

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

Copyright 2022 Nextapps GmbH<br>
Released under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0 License</a><br>
