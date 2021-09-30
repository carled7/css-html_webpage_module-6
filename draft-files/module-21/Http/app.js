
const http = require("http");
const url = require("url");
const fs = require("fs");

function handleFile(req, res, callback){

    //let path = url.parse(request.url).pathname;
    let path = req.url;
    let fileName = "." + path + ".html";

    fs.readFile(fileName, (err, data) =>{
        if(err){
            if(callback){
                if(!callback(res, res)){
                    res.writeHead(404,{'Content-Type': 'text-html'});
                    res.end("<h1>Not Found</h1>");
                }
            }

        }else{
            res.writeHead(200,{'Content-Type': 'text-html'});
            res.write(data);
            res.end();
        }
    }) 
}

function handleRequest (req, res){

    let path = req.url;
    if(path == "/teste"){

        res.end("teste");
        return true;
    }
    return false;
}

http.createServer((request, response) =>{

    handleFile(request, response, handleRequest);

}).listen(3000, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Servido rodando na porta 3000");
    }
});