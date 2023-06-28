import { test, beforeAll, afterAll, describe, expect, beforeEach} from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../app'

describe('Transactions routes', ()=>{
    beforeAll(async() =>{

        await app.ready()
    }) 
    
    afterAll( async () =>{
        await app.close()
    })

    beforeEach(async () =>{
        execSync('npm run knex migrate:rollback --all')
         execSync('npm run knex migrate:latest')
     })

    
    test('O usuário consegue criar uma nova transação', async () =>{
        await request(app.server)
        .post('/transactions')
        .send({
            title: 'New transaction',
            amount: 5000,
            type: 'credit'
        })
        .expect(201)
    })

    test('O usuário consegue listar as transações', async()=>{
        const createTransactionResponse = await request(app.server)
        .post('/transactions')
        .send({
            title: 'New transaction',
            amount: 5000,
            type: 'credit'
        }).expect(201)

        const cookies = createTransactionResponse.get('Set-Cookie')

       const listTransactionResponse = await request(app.server)
        .get('/transactions')
        .set('Cookie', cookies)
        .expect(200)

       expect(listTransactionResponse.body.transactions).toEqual([
        expect.objectContaining({
            title: 'New transaction',
            amount: 5000,
        })

       ])
    })

})

