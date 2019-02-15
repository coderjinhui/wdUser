const cp = require('child_process');
console.log('starting......');
cp.exec('mongod --dbpath ./data');
console.log('db ready');
setTimeout(() => {
  cp.exec('node ./backend/app.js');
  setTimeout(() => {
    console.log('backend ready');
  }, 800);
  cp.exec('ng serve');
  setTimeout(() => {
    console.log('frontend ready');
  }, 800);
}, 800);
