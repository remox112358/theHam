import { watch, series, src,  } from 'gulp'

import clean from 'gulp-clean'
import browserSync from 'browser-sync'
import { existsSync, mkdirSync } from 'fs'

import taskPug from './gulp/pug'
import taskFonts from './gulp/fonts'
import taskImages from './gulp/images'
import taskStyles from './gulp/styles'
import taskScripts from './gulp/scripts'
import taskVendors from './gulp/vendors'

const browser = browserSync.create()

export const pug = taskPug(browser)
export const fonts = taskFonts(browser)
export const images = taskImages(browser)
export const styles = taskStyles(browser)
export const scripts = taskScripts(browser)
export const vendors = taskVendors(browser)

export const cleaning = () => {
  
  return src('public/**', { read: true })
    .pipe(clean({ force: true }))
}

export const building = next => {

  if (!existsSync('public'))
    mkdirSync('public')

  next()
}

export const watching = next => {

  watch('src/**/*.pug', pug)
  watch('src/**/*.sass', styles)
  watch('src/**/*.sass', styles)
  watch('src/assets/img/**/*', images)
  watch('src/assets/js/**/*.js', scripts)
  watch('src/assets/vendors/**/*', vendors)
  watch('src/assets/fonts/**/*', series(fonts, styles))
  
  watch('gulp.utils.js').on('change', browser.reload)
  watch('gulpfile.babel.js').on('change', browser.reload)
  
  next()
}

export const start = next => {
  browser.init({
    port: 3000,
    server: 'public/',
  })

  next()
}

export const build = series(
  building,

  pug,
  fonts,
  images,
  styles,
  vendors,
  scripts,
  
  next => next()
)

export const serve = series(
  build,
  
  start,
  watching
)

export default serve