import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, BelongsTo, hasMany, HasMany, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import User from './User'
import Card from './Card'
import Transaction from './Transaction'

export default class Account extends BaseModel {
    public static selfAssignPrimaryKey = true
  
    @column({ isPrimary: true })
    public id: string

    @beforeCreate()
    public static async createUUID (model: Account) {
      model.id = uuid()
    }
    @column({})
    public branch: string
    
    @column({})
    public account: string
  
    @column({serializeAs: null})
    public userId: string
    
    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>
    
    @hasMany(() => Card)
    public cards: HasMany<typeof Card>

    @hasMany(() => Transaction)
    public transactions: HasMany<typeof Transaction>
}
