const express = require('express')
const app = express()
const port = 3000
//cambiao
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pascuas', (req, res) => {
  res.send('Felices pascuas!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
