import { src, dest, series } from 'gulp'

import sass from 'gulp-sass'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'

import { isProd } from './utils'

export const execute = browser => next => {

  try {
    src('src/assets/sass/**/*')
    .pipe(sourcemaps.init({
      loadMaps: true,
    }))
    .pipe(sass({ 
      outputStyle: isProd ? 'compressed' : 'expanded',
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false,
      overrideBrowserslist:  ['last 4 versions'],
    }))
    .pipe(rename({
      extname: isProd ? '.min.css' : '.css',
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('public/assets/css'))
    .pipe(browser.stream())
  } catch (err) {
    console.log(err)
  }

  next()
}

export default (browser) => series(
  execute(browser)
)