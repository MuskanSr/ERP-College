var mongoose = require('mongoose')

//User Schema 

var UserSchema = mongoose.Schema({
    username:{
      type: String,     
    },
    
    password: {
      type: String
    },
    email: {
      type: String
    },
    name: {   //Added name
      type: String
    },
    
    phone: {//Added number
      type: Number
    
    }
   
  })

var User = module.exports = mongoose.model('User',UserSchema)