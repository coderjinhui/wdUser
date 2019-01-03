const fr = require('../utils/file/importPackage');

let packages = fr.readfiles(__dirname);

const pgs = packages.filter(value => value !== 'index.js' && /^\S+.route.js/.test(value))
.map(value => require(value));

module.exports.route = pgs;