const orders = [
  {
    product_id: 7846384,
    quantity: '3',
    title: 'Iphone',
    description: '11 PRO',
    manufacturer: 'Apple',
    price: '350,000',
    total: '464463',
    collection: 'Phones and Tablet'
  },

  {
    product_id: 6846384,
    quantity: '1',
    title: 'Samsung',
    description: 'Note 9',
    manufacturer: 'Samsung',
    price: '300,000',
    total: '646374',
    collection: 'Phones and Tablet'
  },

  {
    product_id: 7846754,
    quantity: '3',
    title: 'Xiaomi Fit Band',
    description: 'Fit Band',
    manufacturer: 'Xiaomi',
    price: '20,000',
    total: '646785',
    collection: 'Phone Accessories'
  },

  {
    product_id: 2546384,
    quantity: '8',
    title: 'TV',
    description: 'LG Smart Inch',
    manufacturer: 'LG',
    price: '276,000',
    total: '5,476,478',
    collection: 'Electronics'
  }
]

class Cart {
  constructor () {
    this.data = {}
    this.data.items = []
    this.data.totals = 0
    this.data.formattedTotals = ''
  }
}

module.exports = new Cart()

module.exports = orders
