import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cards'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').index().notNullable().unique()

      table.string('type', 10).notNullable()
      table.string('number', 20).notNullable()
      table.string('cvv', 3).notNullable()

      table.uuid('account_id').notNullable().references('id').inTable('accounts')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
