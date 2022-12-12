const { src, dest, series, parallel, watch } = require("gulp");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const browserSync = require("browser-sync").create();

function cleanDist() {
    return src("./dist", { read: false, allowEmpty: true }).pipe(clean());
}

function copyJs() {
    return src(["./src/StudentApi.js", "./src/script.js"])
        .pipe(concat("app.js"))
        .pipe(dest("dist"));
}

function copyVendorJs() {
    return src(["./node_modules/jquery/dist/jquery.min.js"])
        .pipe(concat("vendor.js"))
        .pipe(dest("dist"));
}

function copyCss() {
    return src("./src/*.css").pipe(concat("app.css")).pipe(dest("dist"));
}

function copyHtml() {
    return src("./src/index.html").pipe(dest("dist"));
}

function serve(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
        },
    });

    watch("./src/index.html", series(copyHtml, reloadBrowser));
    watch("./src/**/*.js", series(copyJs, reloadBrowser));
    watch("./src/**/*.css", series(copyCss, reloadBrowser));

    done();
}

function reloadBrowser(done) {
    browserSync.reload();
    done();
}

function taskBuild() {
    return series(cleanDist, parallel(copyJs, copyVendorJs, copyCss, copyHtml));
}

exports.build = taskBuild();
exports.serve = series(taskBuild(), serve);
