const mongoose = require('mongoose');


module.exports = {
  connect(url){
    mongoose.connect(url);
    return mongoose.connection;
  }
};

