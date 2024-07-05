//Import the server
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
const app = require('./app');

//Enviournment variables are located in process.env . None have many internal enviournment variables like env,pwd etc.
// console.log(process.env)

//Start the server
const port = process.env.PORT || 3000;
app.listen(port,()=>{ 
    console.log('App running on port 3000...')
});