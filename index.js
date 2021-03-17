const express = require('express');
const app = express();
const port = 3000;

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