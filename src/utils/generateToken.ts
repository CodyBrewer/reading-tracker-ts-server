import jwt, { SignOptions } from 'jsonwebtoken'
import { SECRET } from '../config'
import { User } from '../entity/User'

interface IPayload {
  uuid: string
  username: string
}

const generateToken = (user: User) => {
  const payload: IPayload = { uuid: user.uuid, username: user.username }
  const options: SignOptions = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, SECRET, options)
}

export default generateToken
