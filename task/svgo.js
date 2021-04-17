const fs = require('fs');
const path = require('path');
let { optimize } = require('svgo');

const plugins = [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    // 'removeViewBox',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIDs',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    // 'removeRasterImages',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    //{ name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
];


const directoryPath = 'dist/img';
const files = fs.readdirSync(directoryPath);

files.forEach(function(filepath){

    if(filepath.endsWith(".svg")){

        filepath = path.resolve(__dirname, "..", directoryPath, filepath);

        console.log(filepath);

        const data = fs.readFileSync(filepath, 'utf8');
        const result = optimize(data, { path: filepath, plugins: plugins });

        fs.writeFileSync(filepath, result.data);
    }
});
