const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

// DB Config
const db = require('./config/keys').mongoURI

//Connect to Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err))

//Body Parser middeware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/orders', require('./routes/api/orders'))

//Create Port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening at port ${port}`))
