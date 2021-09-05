const fs = require('fs')

const readFile = (fileName, i) => {
  const delay = Math.random() * 10000;
  console.log(delay, i);
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)
      } 
      setTimeout(() => {
        resolve(i)
      }, delay)
    })
  })
}

function schedule(time) {
  let i = 0;
  setInterval(async () => {
    i++;
    const rsts = await Promise.all([
      readFile('1.txt', i),
      readFile('2.txt', i)
    ]);
    console.log(rsts);
  }, time);
}

schedule(1000);