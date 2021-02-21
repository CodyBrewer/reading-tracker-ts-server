import { initializeDB } from './db'
import server from './server'
import { PORT, IS_DEV } from './config'

const startServer = async () => {
  // Connect to Postgresql database
  await initializeDB()
  server.listen(PORT, () => {
    IS_DEV ? console.info(`🚀 server listening on ${PORT}`) : console.info('🚀')
  })
}

startServer()
