const fs = require('fs');
const net = require('net');

const server = net.createServer();

server.on('connection', (socket)=> {
  console.log(' Welcome Man ');

  const openWriteFileStream = fs.createWriteStream(`${__dirname}/storage/output.txt`);

  socket.on('data', (data) => {
    const result = openWriteFileStream.write(data);
    if (!result) {
      socket.pause()
    };
  });
  openWriteFileStream.on('drain', ()=> {
    console.log('drain server');
    socket.resume();
  });
});

server.listen(8000, '127.0.0.1', ()=>{
  console.log(server.address());
})
