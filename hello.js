var http= require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res){
	var q= url.parse(req.url,true);
	filename="." + q.pathname;
	if(filename=="./"){filename="./index";}

	filename= filename +".html"

	console.log(filename);
	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,{'content-Type':'text/html'});
			return res.end("404 page Not Found");
		}


	res.writeHead(200,{'content-Type':'text/html'});
	res.write(data);
	return res.end();
	})
}).listen(8080);

console.log("Server Listening on Port 8080...");