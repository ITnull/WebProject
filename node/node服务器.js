var http = require("http");

var fs = require("fs");

var server = http.createServer();

server.on("request",function(req,res){
	res.setHeader("content-type","text/plain;charset=utf-8");
	console.log(req.url);
	//res.end("hello world 世界，你好");

	// 页面切换
	var url = req.url;
	if( url == '/index.html' ){
		res.end("这是首页");
	}

});

server.listen(3000,function(){
	console.log("3000 server is running");
});

