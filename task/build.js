const child_process = require('child_process');
const fs = require('fs');

console.log("Start build .....");
console.log();

fs.existsSync("log") || fs.mkdirSync("log");
fs.existsSync("tmp") || fs.mkdirSync("tmp");
fs.existsSync("dist") || fs.mkdirSync("dist");
fs.existsSync("dist/js") || fs.mkdirSync("dist/js");

/*
const options = (function(argv){

    const arr = {};
    let count = 0;

    argv.forEach(function(val, index) {

        if(++count > 2){

            index = val.split('=');
            val = index[1];
            index = index[0];

            arr[index] = val;

            if(count > 3) console.log(index + ': ' + val);
        }
    });

    return arr;

})(process.argv);
*/

const bundle = process.argv[2] === "--bundle";
//const extern = process.argv[2] === "--extern";

const parameter = (function(opt){

    let parameter = '';

    for(let index in opt){

        if(opt.hasOwnProperty(index)){

            parameter += ' --' + index + '=' + opt[index];
        }
    }

    return parameter;
})({

    compilation_level: "ADVANCED_OPTIMIZATIONS", //"WHITESPACE"
    use_types_for_optimization: true,
    //new_type_inf: true,
    //jscomp_warning: "newCheckTypes",
    //jscomp_error: "strictCheckTypes",
    //jscomp_error: "newCheckTypesExtraChecks",
    generate_exports: true,
    export_local_property_definitions: true,
    language_in: "ECMASCRIPT6_STRICT",
    language_out: "ECMASCRIPT5_STRICT",
    process_closure_primitives: true,
    summary_detail_level: 3,
    warning_level: "VERBOSE",
    emit_use_strict: true,

    output_manifest: "log/manifest.log",
    output_module_dependencies: "log/module_dependencies.log",
    property_renaming_report: "log/renaming_report.log",
    strict_mode_input: true,
    assume_function_wrapper: true,

    transform_amd_modules: true,
    process_common_js_modules: true,
    module_resolution: "BROWSER",
    dependency_mode: "PRUNE_LEGACY",
    rewrite_polyfills: false,
    //js_module_root: "./",
    entry_point: "./src/js/webpack.js",
    //manage_closure_dependencies: true,
    //dependency_mode: "PRUNE_LEGACY",

    isolation_mode: "IIFE"
    //output_wrapper: "(function(){%output%}());"

    //formatting: "PRETTY_PRINT"
});

exec((/^win/.test(process.platform) ?

    "\"node_modules/google-closure-compiler-windows/compiler.exe\""
:
    "java -jar node_modules/google-closure-compiler-java/compiler.jar"

) + parameter + (bundle ? " --js='tmp/**.js'" : "") + " --js='src/js/**.js' --js_output_file='" + (bundle ? "dist/winbox.bundle.js" : "dist/js/winbox.min.js") + "' && exit 0", function(){

    let build = fs.readFileSync((bundle ? "dist/winbox.bundle.js" : "dist/js/winbox.min.js"));
    let preserve = fs.readFileSync("src/js/winbox.js", "utf8");

    const package_json = require("../package.json");

    preserve = preserve.replace("* WinBox.js", "* WinBox.js v" + package_json.version + (bundle ? " (Bundle)" : ""));
    build = preserve.substring(0, preserve.indexOf('*/') + 2) + "\n" + build;
    fs.writeFileSync((bundle ? "dist/winbox.bundle.js" : "dist/js/winbox.min.js"), build);

    console.log("Build Complete.");
});

function exec(prompt, callback){

    const child = child_process.exec(prompt, function(err, stdout, stderr){

        if(err){

            console.error(err);
        }
        else{

            if(callback){

                callback();
            }
        }
    });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}
