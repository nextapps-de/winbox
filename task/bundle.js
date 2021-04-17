const { base64Sync } = require('base64-img');
const { writeFileSync, readFileSync } = require('fs');

const image = process.argv[2] === "--image";
//const template = process.argv[2] === "--template";
const style = process.argv[2] === "--style";

(function(){

    if(image){

        // TODO provide custom filenames

        const compressed = {

            autofit: base64Sync('dist/img/autofit.svg'),
            close: base64Sync('dist/img/close.svg'),
            maximize: base64Sync('dist/img/maximize.svg'),
            //minimize: base64Sync('dist/img/minimize.svg'),
            minus: base64Sync('dist/img/minus.svg')
        };

        let tmp = "";

        for(let key in compressed){

            if(compressed.hasOwnProperty(key)){

                tmp += ("@" + key + ": \"" + compressed[key] + "\";\n");
            }
        }

        writeFileSync("tmp/images.less", tmp);
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
            'style.innerHTML = "' + readFileSync("tmp/winbox.css", "utf8") + '";' +
            'const head = document.getElementsByTagName("head")[0];' +
            'if(head.firstChild) head.insertBefore(style, head.firstChild); else head.appendChild(style);'
        );
    }

})();
