const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
/* sendFile("index.html") in aws server won't know file path.
Instead, use a constant like __dirname 
that allows us to grab hold of the current files location
Doesn't matter in what server*/

app.post("/", function(req,res){
    /*console.log(req.body.num1); to see num1 on hyperterminal*/

    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var result = Number(num1)+Number(num2);

    res.send("The result of the calculation is " + result);
})

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator.html", function(req,res){
    var weight = req.body.weight;
    var height = req.body.height;

    var result = weight/(height*height);

    res.send("Your BMI is "+result);
})

app.listen(3000, function(){
    console.log("Server is running on Port 3000")
});