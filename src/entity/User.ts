import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity } from 'typeorm'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'uuid' })
  uuid: string

  @BeforeInsert()
  async generateUUID(): Promise<void> {
    this.uuid = await uuid()
  }

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
  }

  @Column()
  public: boolean

  toJSON() {
    return {
      ...this,
      password: undefined
    }
  }
}
