const express = require('express')
const hbs = require('hbs');


const app = express()
const port = 3000
app.set('view engine', 'hbs');
//cambiao
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/pascuas', (req, res) => {
  res.render('pascuas')
})
app.get('/formulario', (req, res) => {
  res.render('formulario')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
