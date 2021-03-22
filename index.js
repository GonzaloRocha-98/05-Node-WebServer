require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //Si no encuentra el PORT por default entra al 3000

app.use(express.static(__dirname + '/public')); 

/*app.get('/', function (req, res) {
    res.send('Hello World')
  })
*/
app.get('/usuarios', function (req, res) {
    res.send('Usuario:lukita')
  })
  app.listen(port, () =>{
      console.log(`Serever started - Port ${port}`);
  })


/* A travez de un archivo de configuracion de propiedades de ambientes vamos a pasar el puerto por ahi y 
  ya lo dejmaos despleguado en un hsting en una nube, y lo dejamos en una repo y avanzamos full con rest*/