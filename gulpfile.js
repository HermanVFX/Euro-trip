const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const sync = require("browser-sync").create();
// sass
gulp.task('sass', function(){
    gulp.src('source/sass/style.scss')
      .pipe(sass())
      .pipe(postcss([
        autoprefixer(),
        csso()
      ]))
      .pipe(gulp.dest('build/css'))
      .pipe(sync.stream());
      
  });
// HTML
const html = () => {
    return gulp.src("source/*.html")
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("build"));
}  
// Scripts  
  const scripts = () => {
    return gulp.src("source/js/script.js")
      .pipe(gulp.dest("build/js"))
      .pipe(sync.stream());
}
exports.scripts = scripts;
// Copy
const copy = (done) => {
    gulp.src([
        "source/fonts/*.{woff2,woff}",
        "source/*.ico",
        "source/img/**/*.{jpg,png,svg}",
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"))
    done();
}  
exports.copy = copy;
// Clean
const clean = () => {
    return del("build");
  };
// Reload
const reload = done => {
    sync.reload();
    done();
  }
// Server
const server = (done) => {
    sync.init({
        server: {
        baseDir: "build"
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}  
exports.server = server;
// watcher
const watcher = () => {
    gulp.watch("source/less/**/*.scss", gulp.series(styles));
    gulp.watch("source/js/script.js", gulp.series(scripts));
    gulp.watch("source/*.html", gulp.series(html, reload));
}
// Build
const build = gulp.series(
    clean,
    gulp.parallel(
      styles,
      html,
      scripts,
      sprite,
      copy,
      images,
      createWebp
));
exports.build = build;
// Default
exports.default = gulp.series(
    clean,
    gulp.parallel(
      styles,
      html,
      scripts,
      sprite,
      copy,
      createWebp
    ),
    gulp.series(
      server,
      watcher
));