const express = require("express")

const app = express()
app.use(express.json()) // middleware
const fs = require('fs')

app.get("/",(req,res)=>{
    res.setHeader("Content-type","text/html")
    // res.end("<h1>HOME PAGE</h1>")
    res.send("<h1>HOME PAGE</h1>")

})

app.get("/data",(req,res)=>{
    const dataStream = fs.createReadStream('./data.json','utf-8')
    dataStream.pipe(res)
   
})

app.post("/adddata",(req,res)=>{
    console.log(req.body)
    res.send("data has been added")
})

app.post("/batman",(req,res)=>{
    console.log(req.body)
    res.send("data has been added")
})

app.get("/students" , (req,res)=>{
    const data = fs.readFileSync("./data.json","utf-8")
    const parsed_data = JSON.parse(data)
    // console.log(parsed_data.student)

    res.send(parsed_data.students)
})

app.get("/teachers",(req,res)=>{
    const data = fs.readFileSync('./data.json',"utf-8")
    const parsed_data = JSON.parse(data)
    res.send(parsed_data.teachers)
})

app.post('/addstudent',(req,res)=>{
    //step1 ==> Get the complete data
    const data = fs.readFileSync("./data.json","utf-8")
    //step2 ==> parse to add the data
    const parsed_data = JSON.parse(data)
    //Step3 ==> Add data in students
    parsed_data.students.push(req.body)
    //Step4 ==> adding to db
    // fs.appendFileSync("./data.json",JSON.stringify(parsed_data))
    fs.writeFileSync("./data.json",JSON.stringify(parsed_data))
    console.log(parsed_data)
    res.send("data has been entered")
})

app.delete("/deletestudent",(req,res)=>{
     //step1 ==> Get the complete data
     const data = fs.readFileSync("./data.json","utf-8")
     //step2 ==> parse to add the data
     const parsed_data = JSON.parse(data)
     const new_student_data = parsed_data.students.filter((el)=>{
        return el.name !== "Munnu"
     })
    
     fs.writeFileSync("./data.json",JSON.stringify(parsed_data))
    // console.log(parsed_data)
     console.log(new_student_data)

     res.send("Anything")
})

app.listen(4500,()=>{
    console.log("Server is running the 4500")
})