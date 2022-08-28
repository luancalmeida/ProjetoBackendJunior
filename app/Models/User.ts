import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, hasMany, HasMany, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Account from './Account'

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true
  
  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static async createUUID (model: User) {
    model.id = uuid()
  }

  @column({})
  public name: string
  
  @column({})
  public document: string

  @column({serializeAs: null})
  public password: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Account)
  public accounts: HasMany<typeof Account>
}
