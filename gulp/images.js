import { src, dest, series } from 'gulp'

export const execute = browser => next => {

  src([
    'src/assets/img/**/*'
  ]).on('error', error => console.log(error))
  .pipe(dest('public/assets/img')).on('error', error => console.log(error))
  .pipe(browser.stream())

  next()
}

export default browser => series(
  execute(browser)
)