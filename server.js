const express = require('express')
const app = express()
const port = 3000
//cambiao
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/navidad', (req, res) => {
    res.send('feliz navidad!!! ♥')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
