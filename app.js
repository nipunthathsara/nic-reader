var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('files'));

app.listen(3000, function(){
    console.log("listening");
});

app.get('/home', function(request,response){
    response.sendFile('home.html',{root:path.join(__dirname,'./files')});
});

app.post('/api/nicProcess', function(request, response){
    console.log("inpost");
    //console.log(request.body.nicData);
    var nicNumber = request.body.nicData.toString();
    processor(nicNumber);
    
    response.send(request.body.nicData);
});

function processor (nicNumber){
    console.log(Number(nicNumber)+1);
};
