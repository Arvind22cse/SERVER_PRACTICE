var http = require('http');
var querystring = require('querystring');
var name, email;

function fun(req, res) {
    var d = '';
    req.on('data', function (chunk) {
        console.log(chunk);
        d += chunk;
        console.log(d);
    });
    req.on('end', function () {
        console.log('Data is ' + d);
        var qs = querystring.parse(d);
        name = qs["name"];
        email = qs["email"];
        res.write("Hello " + name + ", your email is " + email);
        res.end();
    });
}

http.createServer(fun).listen(4000);
console.log('Server created at http://localhost:4000/');
