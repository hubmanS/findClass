const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('server port 3000');
})
// io.on('connection', (socket)=>{
// 	socket.on();
// });
//
// app.get('/', (req, res)=>{
// 	res.render('index')
// })

server.listen(8080)