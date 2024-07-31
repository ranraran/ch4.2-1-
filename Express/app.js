// let http = require('http');
// let url = require('url');
// http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// /*Use the url module to turn the querystring into an object:*/
// var q = url.parse(req.url, true).query;
// /*Return the year and month from the query object:*/
// var txt = q.year + " " + q.month;
// res.end(txt);
// }).listen(9999);
const express = require('express')
const app = express()
app.get('/hello', function(req, res){
    let url = require('url');
    res.set(200, 'Content-Type', 'text/html');
    var q = url.parse(req.url, true).query;
    var txt = "name" + q.name + " " +q.Lastname + " " +"<br/>" + "Login Date:"+ q.month + " " + q.date + "," + q.year;
    res.send(txt);
    })
app.listen(8000,function(){
console.log("Server is running on PORT 9999")
})