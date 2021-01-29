import { src, dest, series } from 'gulp'

import tap from 'gulp-tap'
import babelify from 'babelify'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import sourcemaps from 'gulp-sourcemaps'
import source from 'vinyl-source-stream'

import { isProd, sysPath } from './utils'

export const execute = browser => next => {

  try {
    src([
      'src/assets/js/**/*.js',
      '!src/assets/js/**/_*.js'
    ])
    .pipe(tap(file => {
      const filePath = file.path.split(sysPath('src/assets/js/')).pop()

      browserify({
        entries: [file.path]
      })
      .transform(babelify, {
        presets: ['@babel/preset-env'],
      })
      .bundle()
      .pipe(source(filePath))
      .pipe(rename({
        extname: isProd ? '.min.js' : '.js',
      }))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true,
      }))
      .pipe(uglify({
        mangle: isProd,
        output: {
            beautify: !isProd,
            comments: !isProd,
        },
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(dest('public/assets/js'))
    }))
    .pipe(browser.stream())
  } catch (err) {
    console.log(err)
  }

  next()
}

export default (browser) => series(
  execute(browser)
)