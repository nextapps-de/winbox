import WinBox from "./winbox.js";

/** @export */ WinBox.new;
/** @export */ WinBox.prototype.init;
/** @export */ WinBox.prototype.mount;
/** @export */ WinBox.prototype.unmount;
/** @export */ WinBox.prototype.move;
/** @export */ WinBox.prototype.resize;
/** @export */ WinBox.prototype.close;
/** @export */ WinBox.prototype.focus;
/** @export */ WinBox.prototype.minimize;
/** @export */ WinBox.prototype.maximize;
/** @export */ WinBox.prototype.fullscreen;
/** @export */ WinBox.prototype.setBackground;
/** @export */ WinBox.prototype.setTitle;
/** @export */ WinBox.prototype.setUrl;

/** @export */ WinBox.id;
/** @export */ WinBox.body;
/** @export */ WinBox.min;
/** @export */ WinBox.max;
/** @export */ WinBox.x;
/** @export */ WinBox.y;
/** @export */ WinBox.width;
/** @export */ WinBox.height;
/** @export */ WinBox.top;
/** @export */ WinBox.right;
/** @export */ WinBox.bottom;
/** @export */ WinBox.left;

window["WinBox"] = WinBox;
