
const fs = require('fs');
const path = require('path');

function exist(path) {
    return fs.existsSync(path);
}

function fileType(path) {
    if(fs.statSync(path).isDirectory()) {
        return 'dir';
    }else {
        return 'file';
    }
}

function readfiles(dirPath) {
    let files = [];
    
    function _read(dirPath) {
        if(exist(dirPath) && fileType(dirPath) === 'dir') {
            let dir = fs.readdirSync(dirPath);
            dir.forEach(tempPath => {
                tempPath = path.join(dirPath, tempPath)
                _read(tempPath);
            })
        }else {
            files.push(dirPath);
        }
    }

    _read(dirPath);
    return files;
}

module.exports.readfiles = readfiles