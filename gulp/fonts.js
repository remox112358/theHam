import { src, dest, series } from 'gulp'

const execute = browser => next => {

  src('src/assets/fonts/**/*')
  .pipe(dest('public/assets/fonts'))
  .pipe(browser.stream())

  next()
}

export default browser => series(
  execute(browser)
)