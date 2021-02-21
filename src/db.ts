import 'reflect-metadata'
import { createConnection, ConnectionOptions } from 'typeorm'
import { User } from './entity/User'
import { DB_URL, IS_DEV } from './config'

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  url: DB_URL,
  synchronize: IS_DEV,
  logging: IS_DEV,
  entities: [User],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
}

export const initializeDB = async (): Promise<void> => {
  await createConnection(connectionOptions)
}
