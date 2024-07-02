var http=require('http');
var mod=require('./moduleexport');
function fun(req,res){
res.write("function call is"+mod.datetime(1,2));
res.end();
}
http.createServer(fun).listen(5000);
console.log('server created');