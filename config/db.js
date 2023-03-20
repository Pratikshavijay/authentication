import mongoose from 'mongoose'


 export const mongoconnection = () => {
     console.log('Connecting to MongoDb');
      mongoose.connect('mongodb://127.0.0.1:27017/expressapi')
 }





    

