import path from 'path'

export const isProd = process.env.NODE_ENV === 'production'

export const sysPath = pathname => pathname.replace(/\//g, path.sep)