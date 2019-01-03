const fs = require('fs');
const f = __dirname;
const s = fs.readdirSync(f);
module.exports = {
  dir: f,
  file: s
}