const fs = require('fs');
const path = require('path');
let svgo = require('svgo');

svgo = new svgo({
    plugins: [{
        cleanupAttrs: true,
    }, {
        removeDoctype: true,
    },{
        removeXMLProcInst: true,
    },{
        removeComments: true,
    },{
        removeMetadata: true,
    },{
        removeTitle: true,
    },{
        removeDesc: true,
    },{
        removeUselessDefs: true,
    },{
        removeEditorsNSData: true,
    },{
        removeEmptyAttrs: true,
    },{
        removeHiddenElems: true,
    },{
        removeEmptyText: true,
    },{
        removeEmptyContainers: true,
    },{
        removeViewBox: false,
    },{
        cleanupEnableBackground: true,
    },{
        convertStyleToAttrs: true,
    },{
        convertColors: true,
    },{
        convertPathData: true,
    },{
        convertTransform: true,
    },{
        removeUnknownsAndDefaults: true,
    },{
        removeNonInheritableGroupAttrs: true,
    },{
        removeUselessStrokeAndFill: true,
    },{
        removeUnusedNS: true,
    },{
        cleanupIDs: true,
    },{
        cleanupNumericValues: true,
    },{
        moveElemsAttrsToGroup: true,
    },{
        moveGroupAttrsToElems: true,
    },{
        collapseGroups: true,
    },{
        removeRasterImages: false,
    },{
        mergePaths: true,
    },{
        convertShapeToPath: true,
    },{
        sortAttrs: true,
    },{
        removeDimensions: true,
    }/*,{
        removeAttrs: {attrs: '(stroke|fill)'},
    }*/]
});

const directoryPath = 'dist/img';
const files = fs.readdirSync(directoryPath);

files.forEach(function(filepath){

    if(filepath.endsWith(".svg")){

        filepath = path.resolve(__dirname, "..", directoryPath, filepath);

        const data = fs.readFileSync(filepath, 'utf8');

        svgo.optimize(data, { path: filepath }).then(function(result){

            console.log(filepath);
            fs.writeFileSync(filepath, result.data);

        }).catch(e => console.error(e));
    }
});
