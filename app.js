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
    //console.log(Number(nicNumber)+1);
    var birthYear = nicNumber.substring(0,2);
    birthYear = ("19" + birthYear);
    console.log(birthYear);
    var gender = (((Number)(nicNumber.substring(2,5))) > 500 ? "female" : "male");
    console.log(gender); 
    birthdateCalculator((Number)(nicNumber.substring(2,5)), birthYear);
}

function birthdateCalculator(date, birthYear){
    console.log(date);
    if(leapYear(birthYear)){
        console.log("true");
    }else{
        console.log("false");
    }
}

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
