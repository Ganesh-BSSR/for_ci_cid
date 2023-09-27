const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send(
    'keyboard I am satisfied. Thank you Lord for granting me such a wonderful keyboard'
  )
})

app.post('/login', (req, res) => {
  const body = req.body
  const { username, password } = body
  if (username === 'Ganesh' && password === 'Ganesh') {
    res.status(200).send({ message: 'Logged in Successfully!' })
  } else {
    res.status(400).send('Login Failed')
  }
})

app.listen(3000, () => {
  console.log('Server started at port: 3000')
})

module.exports = app
