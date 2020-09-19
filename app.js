const express=require('express');
const app=express()
const mongoose=require('mongoose')
const connectdb =require("./connectdb/db")
const PORT=6000


connectdb()
require('./models/user')


app.use(express.json())
app.use(require('./routes/auth'))

app.listen(PORT,()=>{
    console.log("server is running",PORT)
})