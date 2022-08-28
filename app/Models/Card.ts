import { DateTime } from 'luxon'
import { BaseModel,beforeCreate, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

import Account from './Account'

export default class Card extends BaseModel {
  public static selfAssignPrimaryKey = true
  
  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static async createUUID (model: Card) {
    model.id = uuid()
  }

  @column({})
  public type: string
  
  @column({serialize: (value: string | null) => {
    if(value){
      let lastDigits = value.split(" ").pop()
      return "**** **** **** " + lastDigits
    }
    return value
  }})
  public number: string

  @column({})
  public cvv: string
  
  @column({})
  public accountId: string
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Account)
  public account: BelongsTo<typeof Account>
}
