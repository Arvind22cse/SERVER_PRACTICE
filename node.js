var http=require('http');
function fun(req,res){
if(req.url=='/'){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h1>Hello</h1>'+req.url);
    res.end();
}
else if(req.url=='/about'){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(req.url+'<h2> : Hello Arvind</h2>');
    res.end();
}
else{
    res.end('Invalid');
}
}
http.createServer(fun).listen(3000);
console.log('server running at http://localhost:3000');