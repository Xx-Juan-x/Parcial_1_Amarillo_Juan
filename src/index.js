require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//const routes = require('./routes');

const app = express();

app.use(express.json());
//app.use(routes);

app.get('/',(req, res)=>{
    res.send(200, "Bienvenido al servidor");
})

mongoose.connect(process.env.DB_CONNECT)
.then(
    app.listen(()=>{
        console.log('DB OK');
        app.listen(process.env.PORT, () => console.log('Server OK'))
    })
)
.catch((error)=> console.log("DB Failed" + error))

