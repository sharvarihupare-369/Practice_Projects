const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.setHeader("Content-type","text/html")
    res.end("<h1>HOME PAGE</h1>")
})

app.listen(4500,()=>{
    console.log("Server is running the 4500")
})