/**
 * Created by mlingolu on 1/25/17.
 */


var express = require('express');
var path = require('path');

var ejs = require('ejs');


const app = express();


app.use(express.static(path.join(__dirname,'public')));


app.engine('html',ejs.renderFile);
app.set('views',path.join(__dirname,'public'));
app.set('views engine', 'html');


app.listen(3000, function () {
    console.log("server started");
})