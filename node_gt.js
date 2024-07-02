http = require('http');
url = require('url');
querystring = require('querystring');

function fun(req, res) {
    if (req.url.includes('/login')) {
        var path = url.parse(req.url).pathname; // Corrected variable name
        console.log(path);
        var query = url.parse(req.url).query;
        console.log(query);
        qs = querystring.parse(query);
        console.log(qs);
        var name = qs["name"];
        var email = qs["email"];
        res.write("Your name is " + name + " and your email is " + email);
        res.end();
    }
    else{
        
    }
}

http.createServer(fun).listen(5000);
console.log('Server is listening at the port http://localhost:5000/');
