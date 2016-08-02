
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.writeFile("writeFile.txt", "I writing this content into file", function (error) {
        if (error) {
		return console.log(error);
	}
        console.log("This file was saved");
	res.end("this file was saved");
    });
});
server.listen(3000);
console.log('server running on port number 3000')
