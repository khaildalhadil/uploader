const fs = require('fs');

(async => {
  const writeStream = fs.createWriteStream('./input.txt');

  for (let i = 0; i < 10000000; i++) {
    const buff = Buffer.from(` ${i} `, 'utf-8');
    writeStream.write(buff);
  }
})()
