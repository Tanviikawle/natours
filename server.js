//Import the server
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');


const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(() => {
    console.log('DB connection successfull.')
})

//Enviournment variables are located in process.env . None have many internal enviournment variables like env,pwd etc.
// console.log(process.env)

//Start the server
const port = process.env.PORT || 3000;
app.listen(port,()=>{ 
    console.log('App running on port 3000...')
});