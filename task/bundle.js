const { base64Sync } = require('base64-img');
const fs = require('fs');

fs.existsSync("log") || fs.mkdirSync("log");
fs.existsSync("tmp") || fs.mkdirSync("tmp");
fs.existsSync("dist") || fs.mkdirSync("dist");
fs.existsSync("dist/js") || fs.mkdirSync("dist/js");

const image = process.argv[2] === "--image";
//const template = process.argv[2] === "--template";
const style = process.argv[2] === "--style";

(function(){

    if(image){

        // TODO provide custom filenames

        const compressed = {

            max: base64Sync('dist/img/max.svg'),
            close: base64Sync('dist/img/close.svg'),
            full: base64Sync('dist/img/full.svg'),
            restore: base64Sync('dist/img/restore.svg'),
            //exit: base64Sync('dist/img/exit.svg'),
            min: base64Sync('dist/img/min.svg')
        };

        let tmp = "";

        for(let key in compressed){

            if(compressed.hasOwnProperty(key)){

                tmp += ("@" + key + ": \"" + compressed[key] + "\";\n");
            }
        }

        fs.writeFileSync("tmp/images.less", tmp);
        fs.writeFileSync("tmp/bundle.less", '@import "../src/css/winbox.less"; @import "images.less";');
    }

    // ----------------------

    if(style){

        fs.writeFileSync("tmp/style.js",

            'const style = document.createElement("style");' +
            'style.innerHTML = "' + fs.readFileSync("dist/css/winbox.min.css", "utf8").replace(/"/g, "'") + '";' +
            'const head = document.getElementsByTagName("head")[0];' +
            'if(head.firstChild) head.insertBefore(style, head.firstChild); else head.appendChild(style);'
        );
    }

})();
