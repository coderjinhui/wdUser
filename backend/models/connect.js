const mongoose = require('mongoose');


module.exports = {
  connect(url){
    mongoose.connect(url, {
      useFindAndModify: false,
      useNewUrlParser: true 
    });
    return mongoose.connection;
  }
};

