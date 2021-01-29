import { src, dest, series } from 'gulp'

export const execute = browser => next => {
  
  src('src/assets/vendors/**/*')
  .pipe(dest('public/assets/vendors'))
  .pipe(browser.stream())

  next()
}

export default browser => series(
  execute(browser)
)