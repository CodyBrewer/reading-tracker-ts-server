import { Request, Response, NextFunction } from 'express'

interface IRegister {
  username: string
  email: string
  password: string
  public?: boolean
}

const requiredUserInfo = ['username', 'email', 'password']

const verifyRegisterBody = (req: Request, res: Response, next: NextFunction) => {
  requiredUserInfo.forEach((property) => {
    if (!Object.prototype.hasOwnProperty.call(req.body, property)) {
      const error = new Error()
      error.message = `Missing Required user property: ${property}`
      res.status(400)
      next(error)
    }
  })
  const user: IRegister = req.body
  res.locals.user = user
  next()
}

export default { verifyRegisterBody }
