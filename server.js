const express = require('express')
const hbs = require('hbs');


const app = express()
const port = 3000
app.set('view engine', 'hbs');
//cambiao

//para que mi apliciacion entienda los datos que entran

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/pascuas', (req, res) => {
  res.render('pascuas')
})
app.get('/formulario', (req, res) => {
  res.render('formulario')
})
app.post("/formulario", function(req, res){

  console.log(req.body)
  
  const email = req.body.email;

  const password = req.body.password;
  console.log(`datos recibidos: ${email} contraseña: ${password}`);
  res.send("dato recibido")
})
//escuchando al puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
