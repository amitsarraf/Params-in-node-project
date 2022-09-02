// get route two params name and age
// send them back in a json response

const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req,res)=>{
    const {name, age} = req.query
    res.status(200).json({name:name, age:age})
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

//url = http://localhost:5000/?name=amit&age=23