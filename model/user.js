import mongoose from 'mongoose'
var schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
},
    user: {
        type: String,
        required: true,
        unique: true
    },
  password: {
        type: String,
        default: ''
   }
 })
var newuser = new mongoose.model('user', schema);

 export default newuser;