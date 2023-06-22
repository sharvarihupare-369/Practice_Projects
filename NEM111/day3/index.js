const http = require('http')
// console.log(http)

const fs = require('fs')

//Endpoints ==> / , /data , /about, /contact 
//if i use write ==> 
const server = http.createServer((request,response)=>{
  if(request.url === "/"){
    // response.write("This is the home page")
    // response.end()
    response.end("This is the home page")
  }else if(request.url === "/data"){
    //   response.end("Data will be send")
    fs.readFile('./data.json',"utf-8",(err,data)=>{
        if(err){
            // console.log(err)
            response.write(err)
            response.end()
        }else{
            response.end(data)
        }
    })
  }else if(request.url === "/blogs"){
    response.end("Blog data")
  }else if(request.url === "/todos"){
    fs.readFile("./todo.json","utf-8",(err,data)=>{
        if(err){
            response.write(err)
            response.end()
        }else{
            response.end(data)
        }
    })
  }
  else{
    // response.end("INVALID ENDPOINTS")
    response.end(http.STATUS_CODES["404"])
  }
})

server.listen(7500,()=>{
    console.log("Server is running at Port 7500")
})


//benchmarking server ==> testing of server that how many request it can handle I dont want if too many requests come my server will crash.Server should be crash proof
//testing server that how much load it can handle // check effectiveness of server
//autocanon --> npm package to check benchmark
//For benchmarking server shiuld be running