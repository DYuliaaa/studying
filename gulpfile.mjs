import gulp from "gulp";
<<<<<<< HEAD

import del from "del";
import include from "gulp-file-include";
import formatHtml from "gulp-format-html";

=======
import del from "del";

import include from "gulp-file-include";
import formatHtml from "gulp-format-html";
>>>>>>> main
import less from "gulp-less";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import minify from "gulp-csso";
import rename from "gulp-rename";
<<<<<<< HEAD

=======
>>>>>>> main
import terser from "gulp-terser";

import imagemin from "gulp-imagemin";
import imagemin_gifsicle from "imagemin-gifsicle";
import imagemin_mozjpeg from "imagemin-mozjpeg";
import imagemin_optipng from "imagemin-optipng";

import svgmin from "gulp-svgmin";
import svgstore from "gulp-svgstore";
<<<<<<< HEAD

=======
>>>>>>> main
import server from "browser-sync";

const resources = {
  html: "src/html/**/*.html",
  jsDev: "src/scripts/dev/**/*.js",
  jsVendor: "src/scripts/vendor/**/*.js",
  images: "src/assets/images/**/*.{png,jpg,jpeg,webp,gif,svg}",
  less: "src/styles/**/*.less",
  svgSprite: "src/assets/svg-sprite/*.svg",
  static: [
    "src/assets/icons/**/*.*",
    "src/assets/favicons/**/*.*",
    "src/assets/fonts/**/*.{woff,woff2}",
    "src/assets/video/**/*.{mp4,webm}",
    "src/assets/audio/**/*.{mp3,ogg,wav,aac}",
    "src/json/**/*.json",
    "src/php/**/*.php"
  ]
};
<<<<<<< HEAD



function clean() {
  return del("dist");
}

=======
// Gulp Tasks:
function clean() {
  return del("dist");
}
>>>>>>> main
function includeHtml() {
  return gulp
    .src("src/html/*.html")
    .pipe(plumber())
    .pipe(
      include({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(formatHtml())
    .pipe(gulp.dest("dist"));
}
<<<<<<< HEAD

=======
>>>>>>> main
function style() {
  return gulp
    .src("src/styles/styles.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(
      postcss([
        autoprefixer({ overrideBrowserslist: ["last 4 version"] }),
        sortMediaQueries({
          sort: "desktop-first"
        })
      ])
    )
    .pipe(gulp.dest("dist/styles"))
    .pipe(minify())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("dist/styles"));
}
<<<<<<< HEAD

=======
>>>>>>> main
function js() {
  return gulp
    .src("src/scripts/dev/*.js")
    .pipe(plumber())
    .pipe(
      include({
        prefix: "//@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest("dist/scripts"))
    .pipe(terser())
    .pipe(
      rename(function (path) {
        path.basename += ".min";
      })
    )
    .pipe(gulp.dest("dist/scripts"));
}
<<<<<<< HEAD

=======
>>>>>>> main
function jsCopy() {
  return gulp
    .src(resources.jsVendor)
    .pipe(plumber())
    .pipe(gulp.dest("dist/scripts"));
}
<<<<<<< HEAD

=======
>>>>>>> main
function copy() {
  return gulp
    .src(resources.static, {
      base: "src"
    })
    .pipe(gulp.dest("dist/"));
}
<<<<<<< HEAD

=======
>>>>>>> main
function images() {
  return gulp
    .src(resources.images)
    .pipe(
      imagemin([
        imagemin_gifsicle({ interlaced: true }),
        imagemin_mozjpeg({ quality: 100, progressive: true }),
        imagemin_optipng({ optimizationLevel: 3 })
      ])
    )
    .pipe(gulp.dest("dist/assets/images"));
}
<<<<<<< HEAD

=======
>>>>>>> main
function svgSprite() {
  return gulp
    .src(resources.svgSprite)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(
      svgstore({
        inlineSvg: true
      })
    )
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("dist/assets/icons"));
}
<<<<<<< HEAD

=======
>>>>>>> main
const build = gulp.series(
  clean,
  copy,
  includeHtml,
  style,
  js,
  jsCopy,
  images,
  svgSprite
);
<<<<<<< HEAD

=======
>>>>>>> main
function reloadServer(done) {
  server.reload();
  done();
}
<<<<<<< HEAD

=======
>>>>>>> main
function serve() {
  server.init({
    server: "dist"
  });
  gulp.watch(resources.html, gulp.series(includeHtml, reloadServer));
  gulp.watch(resources.less, gulp.series(style, reloadServer));
  gulp.watch(resources.jsDev, gulp.series(js, reloadServer));
  gulp.watch(resources.jsVendor, gulp.series(jsCopy, reloadServer));
  gulp.watch(resources.static, { delay: 500 }, gulp.series(copy, reloadServer));
  gulp.watch(resources.images, { delay: 500 }, gulp.series(images, reloadServer));
  gulp.watch(resources.svgSprite, gulp.series(svgSprite, reloadServer));
}
<<<<<<< HEAD

const start = gulp.series(build, serve);

=======
const start = gulp.series(build, serve);
>>>>>>> main
export {
  clean,
  copy,
  includeHtml,
  style,
  js,
  jsCopy,
  images,
  svgSprite,
  build,
  serve,
  start
<<<<<<< HEAD
}; 
=======
};
>>>>>>> main
