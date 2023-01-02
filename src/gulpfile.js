const {src, dest, watch, series, parallel} = require("gulp");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

const html = () => {
    return src("./html/*.html")
        .pipe(fileInclude())
        .pipe(size({title: "Before"}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(size({title: "After"}))
        .pipe(dest("../"))
}

const watcher = () => {
    watch(["./html/*.html", "./parts/*.html"], html);
}

module.exports.html = html;
module.exports.watch = watcher;
module.exports.dev = series(
    html,
    watcher
);












