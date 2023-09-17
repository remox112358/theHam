import { src, dest, series } from 'gulp'

import replace from 'gulp-replace'

const execute = browser => next => {

  src(['public/index.html'])
    .pipe(replace(/(src|href)="\/(?!\/)(.*?)"/g, '$1="./$2"'))
    .pipe(dest('public'))
    .pipe(browser.stream())

  next()
}

export default browser => series(
  execute(browser)
)