import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database.js'

const app = fastify()

app.get('/hello', async () => {
    const transaction = await knex('transactions')
    .insert({
        id: crypto.randomUUID(),
        title: 'Transação Nubank',
        amount: 1000,
    })
    .returning('*')

    return transaction
})

app.get('/busca', async () => {
    const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

    return transactions
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})
