const express = require('express')
const app = express();
require('dotenv').config();
require('./Models/db');
const bodyParser = require ('body-parser');
const cors = require('cors');
const AuthRouter = require ('./Routes/AuthRouter.js')
const ProductRouter = require('./Routes/ProductRouter')



const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('Prateek');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/USERDB',AuthRouter)
app.use('/products' ,ProductRouter)

app.listen(PORT,()=>{
    console.log(`Server is runing on ${PORT}`)
}) 