const net = require('net');
const fs = require('fs');

const client = new net.Socket();

client.connect(8000, '127.0.0.1', async()=> {
  console.log(`I'm client`);
  
  const openToReadFileStream = fs.createReadStream(`${__dirname}/storage/input.txt`);

  openToReadFileStream.on('data', (data)=> {
    if (!client.write(data)) {
      openToReadFileStream.pause();
    }
  });

  client.on('drain', ()=> {
    console.log('drain client');
    openToReadFileStream.resume();
  })

  openToReadFileStream.on('end', () => {
    console.log('successful ')
  })

});
