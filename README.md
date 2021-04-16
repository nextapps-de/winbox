<h1>
    <img src="https://cdn.jsdelivr.net/gh/nextapps-de/winbox@master/winbox.svg" alt="WinBox.js: HTML5 Window Manager for the Web." width="100%">
</h1>
<h3>Professional window manager for the web: lightweight, outstanding performance, no dependencies, fully customizable, open source!</h3>

<a target="_blank" href="https://www.npmjs.com/package/winbox"><img src="https://img.shields.io/npm/v/winbox.svg"></a>
<a target="_blank" href="https://github.com/nextapps-de/winbox/issues"><img src="https://img.shields.io/github/issues/nextapps-de/winbox.svg"></a>
<a target="_blank" href="https://github.com/nextapps-de/winbox/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/winbox.svg"></a>

<a href="https://nextapps-de.github.io/winbox/">Demo</a> &ensp;&bull;&ensp; <a href="#started">Getting Started</a> &ensp;&bull;&ensp; <a href="#options">Options</a> &ensp;&bull;&ensp; <a href="#api">API</a> &ensp;&bull;&ensp; <a href="#styling">Styling</a> &ensp;&bull;&ensp; <a href="#controls">Controls</a></a> &ensp;&bull;&ensp; <a href="CHANGELOG.md">Changelog</a>

<a name="started" id="started"></a>
## Getting Started

__Version Explanation__

<table>
    <tr>
        <td>Bundle Standalone</td>
        <td>
            All assets bundled into one single file (js + css + html + icons).
        </td>
    </tr>
    <tr></tr>
    <tr>
        <td>Non-Bundled</td>
        <td>
            Each asset file exists separately. Recommended when using own bundler.
        </td>
    </tr>
</table>


__Get Latest Build (Stable):__

<table>
    <tr>
        <td colspan=3">
            <b><u>Bundle Standalone:</u></b>
        </td>
    </tr>
    <tr>
        <td>winbox.bundle.js</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.0.3/dist/winbox.bundle.js" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/winbox.bundle.js" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/winbox.bundle.js</a></td>
    </tr>
    <!--
    <tr>
        <td colspan=3">
            <br><b><u>Bundle CDN:</u></b>
        </td>
    </tr>
    <tr>
        <td>winbox.cdn.js</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.0.3/dist/winbox.cdn.js" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/winbox.cdn.js" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/winbox.cdn.js</a></td>
    </tr>
    -->
    <tr>
        <td colspan=3">
            <br><b><u>Non-Bundled:</u></b>
        </td>
    </tr>
    <tr>
        <td>winbox.min.js</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.0.3/dist/js/winbox.min.js" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/js/winbox.min.js" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/js/winbox.min.js</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>winbox.css</td>
        <td><a href="https://github.com/nextapps-de/winbox/raw/0.0.3/dist/css/winbox.css" target="_blank">Download</a></td>
        <td><a href="https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/css/winbox.css" target="_blank">https://rawcdn.githack.com/nextapps-de/winbox/0.0.3/dist/css/winbox.css</a></td>
    </tr>
    <tr></tr>
    <tr>
        <td>img.zip</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.0.3/dist/img" target="_blank">Download</a></td>
        <td>Alternatively when using non-bundled version you can download icons from <i>/dist/img/</i></td>
    </tr>
    <tr>
        <td colspan=3">
            <br><b><u>ES6 Modules:</u></b>
        </td>
    </tr>
    <tr>
        <td>src.zip</td>
        <td><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nextapps-de/winbox/tree/0.0.3/src/js" target="_blank">Download</a></td>
        <td>The <i>"/src/js"</i>-folder of this Github repository</td>
    </tr>
</table>


__Get Latest Build (Nightly):__

Just exchange the version number from the URLs above with "master", e.g.: "/winbox/__0.0.3__/dist/" into "/winbox/__master__/dist".


__Get Latest (NPM):__

```cmd
npm install winbox
```


__Get Latest (ES6 Modules):__

https://github.com/nextapps-de/winbox/tree/master/src/js

### Basic Setup

__Insert the script resource tag right after the documents head:__

```html
<html>
<head>
    <script src="winbox.bundle.js"></script>
    <title></title>
</head>
<body>
    <!-- CONTENT -->
</body>
</html>
```

### Preload Library / Async Load

Recommended method to load the bundle:
```html
<html>
<head>
    <title></title>
    <link rel="preload" href="winbox.bundle.js" as="script">
</head>
<body>
    <!-- 
    CONTENT 
    -->
    <script src="winbox.bundle.js" async></script>
</body>
</html>
```

> In rare situations it might produce a short flashing/reflow after page load, depending on your stack. Moving the script tag into the head section will solve this issue.

### ES6 Modules

The ES6 modules are located in `src/js/`.

```html
<script type="module">
  import WinBox from "./src/js/winbox.js";
</script>
```

You can also load modules via CDN, e.g.:

```html
<script type="module">
  import WinBox from "https://unpkg.com/winbox@0.0.3/src/js/winbox.js";
</script>
```

<a name="api"></a>
## API Overview

Constructor:

- new <a href="#winbox.new">**WinBox**(root, options\<key: value\>)</a> : winbox

Global methods:

- <a href="#winbox.new">WinBox.**new**(root, options\<key: value\>)</a> : winbox

Instance methods:

- <a href="#winbox.init">winbox.**init**()</a>
- <a href="#winbox.mount">winbox.**mount**(src)</a>
- <a href="#winbox.unmount">winbox.**unmount**(dest)</a>
- <a href="#winbox.move">winbox.**move**(x, y)</a>
- <a href="#winbox.resize">winbox.**resize**(width, height)</a>
- <a href="#winbox.close">winbox.**close**()</a>
- <a href="#winbox.focus">winbox.**focus**()</a>
- <a href="#winbox.minimize">winbox.**minimize**(state)</a>
- <a href="#winbox.maximize">winbox.**maximize**(state)</a>
- <a href="#winbox.fullscreen">winbox.**fullscreen**(state)</a>
- <a href="#winbox.setBackground">winbox.**setBackground**(string)</a>
- <a href="#winbox.setTitle">winbox.**setTitle**(string)</a>
- <a href="#winbox.setTitle">winbox.**setUrl**(string)</a>

Instance properties:

- <a href="#winbox.id">winbox.**id**</a>
- <a href="#winbox.body">winbox.**body**</a>
- <a href="#winbox.min">winbox.**min**</a>
- <a href="#winbox.max">winbox.**max**</a>
- <a href="#winbox.full">winbox.**full**</a>
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
        <td>Values&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>id</td>
        <td>number | string</td>
        <td>Set a unique id to the window. Used to define custom styles in css, query elements by context or just to identify the corresponding window instance.</td>
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
        <td>Mount a element (widget, template, etc.) into the window body.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>html</td>
        <td>string</td>
        <td>Set <code>innerHTML</code> of the window body.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>url</td>
        <td>string</td>
        <td>Open URL inside the window (iframe).</td>
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
        <td>Set the initial position of the window (supports "center" and also units "px" and "%").</td>
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
        <td>Set or limit the viewport of the window available area (supports units "px" and "%").</td>
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
        <td>function(width, height)</td>
        <td>Callback triggered when the window resizes. The keyword <code>this</code> inside the callback function refers to the corresponding WinBox instance.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>onclose<br>onfocus<br>onblur</td>
        <td>function()</td>
        <td>Callbacks to several events (Note: the event 'onclose' will be triggered right before closing). The keyword <code>this</code> inside the callback function refers to the corresponding WinBox instance.</td>
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
        <td>Set the border width of the window.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>classname</td>
        <td>string</td>
        <td>Add one or more classnames to the window (multiple classnames needs separated with whitespaces, e.g. "class-a class-b"). Used to define custom styles in css, query elements by context or just to tag the corresponding window instance.</td>
    </tr>
</table>


## Examples

<a name="winbox.new" id="winbox.new"></a>
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
var winbox = WinBox();
winbox.setTitle("Window Title");
```

#### Custom Root

```js
new WinBox(document.body, "Window Title");
```

#### Custom Color

> Supports all CSS styles which are also supported by the style-attribute "background", e.g. colors, transparent colors, hsl, gradients, background images.

```js
new WinBox({
    title: "Custom Color",
    background: "#ff005d"
});
```

Alternatively:
```js
var winbox = new WinBox("Custom Color");
winbox.setBackground("#ff005d");
```

#### Custom Border

```js
new WinBox({
    title: "Custom Border",
    border: 4
});
```

####  Custom Viewport

> Define the available area (supports units "px" and "%").

```js
new WinBox({
    title: "Custom Viewport",
    top: "50px",
    right: "5%",
    bottom: 50,
    left: "5%"
});
```

Alternatively (does not support units!):
```js
var winbox = new WinBox("Custom Viewport");

winbox.top = 50;
winbox.right = 50;
winbox.bottom = 50;
winbox.left = 50;
```

#### Custom Position / Size

> Supports units "px" and "%". Also support the keyword "center" for xy-position.

```js
new WinBox({
    title: "Custom Viewport",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%"
});
```

Alternatively (also supports units):
```js
var winbox = new WinBox("Custom Viewport");

winbox.resize("50%", "50%");
winbox.move("center", "center");
```

Alternatively (does not support units!):
```js
var winbox = new WinBox("Custom Viewport");

winbox.width = 50;
winbox.height = 50;
winbox.resize();

winbox.x = 50;
winbox.y = 50;
winbox.move();
```

#### Set innerHTML

```js
new WinBox(document.body, {

    title: "Set innerHTML",
    html: "<h1>Lorem Ipsum</h1>"
});
```

Alternatively:
```js
var winbox = new WinBox("Custom Viewport");

winbox.body.innerHTML = "<h1>Lorem Ipsum</h1>";
```

#### Mount DOM (Cloned)

```js
var node = document.getElementById("content");

new WinBox(document.body, {

    title: "Mount DOM",
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

```js
var node = document.getElementById("content");

new WinBox(document.body, {

    title: "Mount DOM",
    mount: node
});
```

Alternatively:
```js
var node = document.getElementById("content");
var winbox = new WinBox("Mount DOM");

winbox.mount(node);
```

#### Open Url (iFrame)

```js
var node = document.getElementById("content");

new WinBox(document.body, {

    title: "Open Url",
    url: "https://wikipedia.com"
});
```

Alternatively:
```js
var winbox = new WinBox("Open Url");

winbox.setUrl("https://wikipedia.com");
```


<!--
new WinBox({
title: "Mount DOM",
mount: document.getElementById("content"),
onclose: function(winbox){
winbox.unmount(
document.getElementById("backstore")
);
}
-->


---

Copyright 2021 Nextapps GmbH<br>
Released under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0 License</a><br>
