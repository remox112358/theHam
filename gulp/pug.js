import { src, dest, series } from 'gulp'

import pug from 'gulp-pug'

const execute = browser => next => {

  src([
    'src/**/*.pug', 
    '!src/**/_*.pug', 
    '!src/layouts/**/*.pug',
    '!src/includes/**/*.pug',
  ])
  .pipe(pug({
    pretty: true
  }).on('error', error => {
    console.log(error)
    next(error)
  }))
  .pipe(dest('public'))
  .pipe(browser.stream())

  next()
}

export default browser => series(
  execute(browser)
)