const { base64Sync } = require('base64-img');
const { writeFileSync, readFileSync } = require('fs');

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
            //exit: base64Sync('dist/img/exit.svg'),
            min: base64Sync('dist/img/min.svg')
        };

        let tmp = "";

        for(let key in compressed){

            if(compressed.hasOwnProperty(key)){

                tmp += ("@" + key + ": \"" + compressed[key] + "\";\n");
            }
        }

        writeFileSync("tmp/images.less", tmp);
        writeFileSync("tmp/bundle.less", '@import "../src/css/winbox.less"; @import "images.less";');
    }

    // ----------------------

    // if(template){
    //
    //     writeFileSync("tmp/template.js", readFileSync("src/js/template.js", "utf8").replace(/>\s+</g, "><"));
    // }

    // ----------------------

    if(style){

        writeFileSync("tmp/style.js",

            'const style = document.createElement("style");' +
            'style.innerHTML = "' + readFileSync("dist/css/winbox.min.css", "utf8") + '";' +
            'const head = document.getElementsByTagName("head")[0];' +
            'if(head.firstChild) head.insertBefore(style, head.firstChild); else head.appendChild(style);'
        );
    }

})();
