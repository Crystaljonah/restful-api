const express = require('express')
const router = express.Router()
const uuid = require('uuid')
//Load Order Model
const orders = require('../../models/Order')

//@route    GET api/orders
//@desc     Tests order route
//@access   Public
router.get('/', (req, res) => res.json(orders))

//To check if a product has been ordered
router.get('/:product_id', (req, res) => {
  const found = orders.some(
    order => order.product_id === parseInt(req.params.product_id)
  )

  if (found) {
    res.json(
      orders.filter(
        order => order.product_id === parseInt(req.params.product_id)
      )
    )
  } else {
    res
      .status(400)
      .json({ msg: 'Product not ordered, kindly visit the order page' })
  }
})

//Create an order
router.post('/', (req, res) => {
  const newOrder = {
    product_id: uuid.v4(),
    quantity: req.body.quantity,
    title: req.body.title,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    total: req.body.total,
    collection: req.body.collection
  }

  const amountTotal = Number(newOrder.quantity) * Number(newOrder.price)
  newOrder.total = amountTotal

  orders.push(newOrder)
  res.json(orders)
})

//Update an order
router.put('/:product_id', (req, res) => {
  const found = orders.some(
    order => order.product_id === parseInt(req.params.product_id)
  )

  if (found) {
    const updOrder = req.body
    orders.forEach(order => {
      if (order.product_id === parseInt(req.params.product_id)) {
        order.quantity = updOrder.quantity ? updOrder.quantity : order.quantity
        order.title = updOrder.title ? updOrder.title : order.title
        order.description = updOrder.description
          ? updOrder.description
          : order.description
        order.manufacturer = updOrder.manufacturer
          ? updOrder.manufacturer
          : order.manufacturer
        order.price = updOrder.price ? updOrder.price : order.price
        order.total = updOrder.total ? updOrder.total : order.total
        order.collection = updOrder.collection
          ? updOrder.collection
          : order.collection

        res.json({ msg: 'Order Updated', order })
      }
    })
  } else {
    res
      .status(400)
      .json({ msg: 'Product not ordered, kindly visit the order page' })
  }
})

//Delete an order
router.delete('/:product_id', (req, res) => {
  const order = orders.find(
    order => order.product_id === parseInt(req.params.product_id)
  )

  if (!order) res.status(404).json({ msg: 'No order found' })
  const index = orders.indexOf(order)
  orders.splice(index, 1)
  res.json({ msg: 'Order Deleted' })

  res.json(order)
})

// router.delete('/:product_id', (req, res) => {
//   const foundIndex = orders.findIndex(order => order.product_id === product_id)
//   if (foundIndex === order.product_id) {
//     res.json({ msg: 'Order has been deleted' })
//   } else {
//     orders.splice(foundIndex, 1)
//   }

// const found = orders.some(
//   order => order.product_id === parseInt(req.params.product_id)
// )
// if (found) {
//   const index = orders.indexOf(order)
//   orders.splice(index, 1)
//   res.json({ msg: 'Message Deleted' })
// } else {
//   res
//     .status(400)
//     .json({ msg: 'Product not ordered, kindly visit the order page' })
// }
// })

module.exports = router
