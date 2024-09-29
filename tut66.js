const http = require ('http')
const fs = require('fs')
const fileContent = fs.readFileSync('tut12.html')

const server =  http.createServer((req, res)=>{

    res.writeHead(200,{'Contenet-type':'text/html'});
    res.end(fileContent)

})

server.listen(8002 ,'127.0.0.1' , ()=>{
    console.log("Listening on port 8002")
})