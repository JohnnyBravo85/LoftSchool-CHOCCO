//Так же установлен плагин npm install jquery npm install cross-env --save-dev(пакет определяющий окружение)
const {src, dest, task, series, watch, parallel} = require('gulp'),
      rm = require( 'gulp-rm' ), //Очистка дирректории (dist)
      sass = require('gulp-sass'), //Sass компиляция
      concat = require('gulp-concat'), //Склейка файлов
      browserSync = require('browser-sync').create(), //Live Server
      reload = browserSync.reload, //Перезагрузка сервера
      // sassGlob = require('gulp-sass-glob'), //Автодобавление файло scss в @import
      autoprefixer = require('gulp-autoprefixer'), //Автопрефикс
      px2rem = require('gulp-smile-px2rem'), //Перевод пиксилей в rem
      gcmq = require('gulp-group-css-media-queries'), //Группировка медизапросов
      sourcemaps = require('gulp-sourcemaps'), //Навигация по css develompment для удобства отладок ошибок
      cleanCSS = require('gulp-clean-css'), //Минификация css файла
      babel = require('gulp-babel'), //Установка поддержки js в старых браузерах
      uglify = require('gulp-uglify'), //Минификация JS файлов
      svgo = require('gulp-svgo'), //Обработчик svg
      svgSprite = require('gulp-svg-sprite'), //Сборщик svg спрайта
      gulpif = require('gulp-if');

const env = process.env.NODE_ENV

const {SRC_PATH, DIST_PATH, STYLES_LIBS, JS_LIBS} = require('./gulp.config');

sass.compiler = require('node-sass');

//Список taskов для Gulp
task( 'clean', function() {
  return src( `${DIST_PATH}/**/*`, { read: false })
    .pipe(rm());
});

task('copy:html', function () {
  return src(`${SRC_PATH}/*.html`)
         .pipe(dest(DIST_PATH))
         .pipe(reload({stream: true}));
});

task('sass:style', function () {
  return src([...STYLES_LIBS, `${SRC_PATH}/css/main.scss`])
         .pipe(gulpif(env === 'dev', sourcemaps.init({largeFile: true})))
         .pipe(concat('main.min.scss'))
        //  .pipe(sassGlob())
         .pipe(sass().on('error', sass.logError))
         .pipe(px2rem())
         .pipe(gulpif(env === 'prod', autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
          })))
         .pipe(gulpif(env === 'prod', gcmq()))
         .pipe(gulpif(env === 'prod', cleanCSS({compatibility: 'ie8'})))
         .pipe(gulpif(env === 'dev', sourcemaps.write()))
         .pipe(dest(DIST_PATH))
         .pipe(reload({stream: true}));
});

task('scripts:js', function () {
  return src([JS_LIBS, `${SRC_PATH}/js/*js`])
         .pipe(gulpif(env === 'dev', sourcemaps.init({largeFile: true})))
         .pipe(concat('main.min.js', {newLine: ';'}))
         .pipe(gulpif(env === 'prod', babel({
          presets: ['@babel/env']
          })))
         .pipe(gulpif(env === 'prod', uglify()))
         .pipe(gulpif(env === 'dev', sourcemaps.write()))
         .pipe(dest(DIST_PATH))
         .pipe(reload({stream: true}));
});

task('svg:icons', function() {
  return src(`${SRC_PATH}/img/svg/*.svg`)
         .pipe(svgo({
           plugins: [
            {
              removeAttrs: {
                attrs: '(fill|stroke|style|width|height|data.*)'
              }
            }
           ]
         }))
         .pipe(svgSprite({
           mode: {
             symbol: {
               sprite: '../sprite.svg'
             }
           }
         }))
         .pipe(dest(`${DIST_PATH}/img/svg`));
});

task('copy:png', function () {
  return src(`${SRC_PATH}/img/png/*`)
         .pipe(dest(`${DIST_PATH}/img/png`))
         .pipe(reload({stream: true}));
});

task('copy:jpeg', function () {
  return src(`${SRC_PATH}/img/jpeg/*`)
         .pipe(dest(`${DIST_PATH}/img/jpg`))
         .pipe(reload({stream: true}));
});

task('server', function() {
  browserSync.init({
      server: {
          baseDir: `./${DIST_PATH}`
      },
      open: false
  });
});

task('watch', function() {
  //Файлы отслеживания Gulpom
  watch(`${SRC_PATH}/css/**/*.scss`, series('sass:style'));
  watch(`${SRC_PATH}/js/*.js`, series('scripts:js'));
  watch(`${SRC_PATH}/img/svg/*.svg`, series('svg:icons'));
  watch(`${SRC_PATH}/*.html`, series('copy:html'));

});

//Дефольтный task
task('default', series('clean', parallel('copy:html', 'sass:style', 'scripts:js', 'svg:icons', 'copy:png', 'copy:jpeg'),
                                parallel('watch', 'server')));
        
task('build', series('clean', parallel('copy:html', 'sass:style', 'scripts:js', 'svg:icons', 'copy:png', 'copy:jpeg')));