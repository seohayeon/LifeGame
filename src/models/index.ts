import  mongoose from 'mongoose'
import 'dotenv/config'

const username = process.env["DATABASE_USERNAME"]
const password = process.env["DATABASE_PASSWORD"]
const dbName = process.env["DATABASE_NAME"]

let connection = () =>{
function connect() {
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.fpkyf.mongodb.net/${dbName}?retryWrites=true&w=majority`, function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./users.ts');
}


export default connection
  