
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Account from 'App/Models/Account';
import Card from 'App/Models/Card';
import User from 'App/Models/User';
import Transaction from 'App/Models/Transaction';


export default class UsersController {
    public async create( { request,  }: HttpContextContract) {
        const body = request.only(['name', 'document', 'password'])

        let user = new User()
        user.name = body.name
        user.document = body.document.match(/\d+/g).join('')
        user.password = body.password

        user = await user.save()
        return user;
    }

    public async createAccount( { request, params }: HttpContextContract) {
        const body = request.only(['branch', 'account'])

        let account = new Account()
        account.branch = body.branch
        account.account = body.account
        account.userId = params.peopleId

        account = await account.save()
        return account;
    }
    
    public async getAccounts( { params }: HttpContextContract) {
        return await this.getAccountsService(params.peopleId)
    }
    public async getAccountsService (peopleId : string){
        return await Account.query().where('user_id', '=', peopleId)
    }
    
    public async CreateCards( { request, params  }: HttpContextContract) {
        const body = request.only(['type', 'number', 'cvv' ])

        let card = new Card()
        card.accountId = params.accountId
        card.type = body.type
        card.number = body.number
        card.cvv = body.cvv
        

        card = await card.save()
        return card;

    }

    public async getCards({ params}: HttpContextContract){
        
        let account = await Account.find(params.accountId)
        return account;
    }

    public async getPeoleCards({ request,params}: HttpContextContract){
        
        let accounts = await this.getAccountsService(params.peopleId)
        const page = request.input('cards', 5)
        const limit =request.input('creu', 1)
        let cards = await Card.query().whereIn('account_id', accounts.map((x) => x.$attributes.id)).paginate(page, limit )
       
        return cards
    }

    public async CreateTrasactions( { request, params  }: HttpContextContract) {
        const body = request.only(['value', 'description'])
        
        let transaction = new Transaction()
        transaction.value = body.value
        transaction.description = body.description
        transaction.account_id = params.accountId

        transaction = await transaction.save()
        return transaction;  
    }

    public async getTrasactions({ params}: HttpContextContract){
        
        let transaction = await Transaction.query().where('account_id', '=', params.account)
        return transaction;
        
    }


}
