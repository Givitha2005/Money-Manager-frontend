import { ObjectId } from 'mongodb'
import { client } from './index.js'

export async function createTransaction(data) {
  return await client.db('money_manager').collection('transaction').insertMany(data)
}

export async function getTransaction() {
  return await client
    .db('money_manager')
    .collection('transaction')
    .find({})
    .toArray()
}

export async function updatetransaction(updateData, id) {
  return await client
    .db('money_manager')
    .collection('transaction')
    .updateOne({ _id: ObjectId(id) }, { $set: updateData })
}

export async function getTransactionById(id) {
  return await client
    .db('money_manager')
    .collection('transaction')
    .findOne({ _id: ObjectId(id) })
}

export async function deleteTransactionById(id) {
  return await client
    .db('money_manager')
    .collection('transaction')
    .deleteOne({ _id: ObjectId(id) })
}



export async function deleteAllTransactions() {
  return await client.db('money_manager').collection('transaction').deleteMany({})
}
