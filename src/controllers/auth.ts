import { Request, Response, NextFunction } from 'express'
import { getConnection } from 'typeorm'
import { User } from '../entity/User'

const register = async (req: Request, res: Response, next: NextFunction) => {
  let user = new User()
  user = { ...res.locals.user }

  try {
    await getConnection().manager.save(user)
    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export default { register }
