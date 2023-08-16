import express from 'express'
import {
  createTransaction,
  deleteAllTransactions,
  deleteTransactionById,
  getTransaction,
  getTransactionById,
  updatetransaction,
} from '../helper.js'

const router = express.Router()

//CREATE TRANSACTION
router.post('/', async (req, res) => {
  const data = req.body

  const result = await createTransaction(data)
  res.send(result)
})

//READ TRANSACTION
router.get('/', async (req, res) => {
  const data = req.body

  const result = await getTransaction(data)
  res.send(result)
})

//READ TRANSACTION BY ID

router.get('/:id', async (req, res) => {
  const { id } = req.params
  // console.log(id)
  const result = await getTransactionById(id)
  // console.log(result)
  result
    ? res.send(result)
    : res.status(404).send({ message: 'No such transaction found' })
})

//UPDATE TRANSACTION
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const updateData = req.body
  const result = await updatetransaction(updateData, id)
  res.send(result)
})

//DELETE TRANSACTION
router.delete('/:id', async (req, res) => {
  // console.log(req.params)
  const { id } = req.params

  const transactions = await deleteTransactionById(id)
  res.send(transactions)
})

router.delete('/', async function (req, res) {
  const result = await deleteAllTransactions()
  res.send(result)
})

//UPDATE TRANSACTION

export const transactionRoute = router
