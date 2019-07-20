// var foo = "hello world";
// console.log(foo);

var fs = require("fs");
fs.readFile("data.txt",function(error,data){
	if(error){
		console.log("无法读取文件");
	}else{
		console.log(data.toString());
	}
});
