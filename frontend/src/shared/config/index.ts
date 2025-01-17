// const getEnvVar = (key: string) => {
//   const envVar = process.env[key]
//   // if (envVar === undefined) {
//   //   throw new Error(`Env variable ${key} is required`)
//   // }
//   return envVar
// }

export const ARCHIVARIUS_API_ENDPOINT = process.env.ARCHIVARIUS_API_ENDPOINT
export const API_PROD_ENDPOINT = 'https://catalog.flipperzero.one/api/v0'
export const API_DEV_ENDPOINT = 'https://catalog.flipp.dev/api/v0'

// export const isProd = getEnvVar('PRODUCTION')
export const PRODUCTION_NAME = 'production'
export const DEVELOP_NAME = 'dev'

export const isProd = process.env.PROD
export const isDebug = process.env.DEBUGGING
