import dotenv from 'dotenv'
dotenv.config()

export const NODE_ENV = String(process.env.NODE_ENV) || 'development'
export const IS_DEV = NODE_ENV === 'development' ? true : false
export const PORT = Number(process.env.PORT) || 5000
export const DB_URL = String(process.env.DATABASE_URL) || ''
