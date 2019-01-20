const http = require("http");
const url = require("url");
 
http.createServer(function(request, response){
 
    response.writeHead(200, {"Content-Type":"text/plain"});
 
    let parsed = url.parse(request.url, true);
    let params = parsed.query;
    let param1 = params.a;
    let param2 = params.b;

    if (isNaN(param1) === false && isNaN(param2) === false) {
        var a = Number(param1);
        var b = Number(param2);
        response.write("var1:" + a + " ");
        response.write("var2:" + b + " ");
        if (parsed.pathname === "/sum") {
            let sum = Number(a + b).toFixed(2);
            response.write("sum: " + sum);
            response.end();
        }
        else if (parsed.pathname === "/sub") {
            let sub = Number(a - b).toFixed(2);
            response.write("sub: " + sub);
            response.end();
        }
        else if (parsed.pathname === "/mul") {
            let mul = Number(a * b).toFixed(2);
            response.write("mul: " + mul);
            response.end();
        }
        else if (parsed.pathname === "/div") {
            if (b != 0) {
                let div = Number(a / b).toFixed(2);
                response.write("div: " + div);
                response.end();
            }
            else {
                response.write("Variable cant be equal to 0 while dividing.");
                response.end();
            }
        }
        else {
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end("404 Not Found");
        }
    }
    else {
        response.write("Variables must be numbers.");
        response.end();
    }
 
}).listen(8080, function() {
    console.log("Listening at port 8080");
});