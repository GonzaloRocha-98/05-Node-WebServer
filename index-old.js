const http = require('http');

http.createServer( (req,res) =>{

    /*res.writeHead(200, {'Contet-Type': 'application/json'});
    const user = {
        name:'gonzalo',
        lastname:'rocha'
    };
    res.write(JSON.stringify(user));*/

    res.setHeader('Content-Disposition', 'attachment; filename= user.csv');
    res.writeHead(200, {'Contet-Type': 'application/csv'});
    res.write('nombre, apellido\nGonzalo,Rocha\nNahuel,Rocha');
    res.end();

}).listen(3000);