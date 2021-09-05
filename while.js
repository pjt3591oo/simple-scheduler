const fs = require('fs')

const readFile = (fileName, i) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)
      } 
      setTimeout(() => {
        resolve(data.toString())
      }, 3500)
    })
  })
}

const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}

async function schedule(time, tasks) {
  let i = 0;
  while(1) {
    const rsts = await Promise.all([
      ...tasks,
      delay(time),
    ]);
    console.log(rsts, i++);
  }
}

schedule(1000, [
  readFile('1.txt'),
  readFile('2.txt')
]);