const express = require ("express")

const app = express()
//----------------
app.use(express.static(__dirname + "/pages"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/pages/home.html")
})
app.get("/",function(req,res){
    res.sendFile(__dirname + "/pages/stylehome.css")
})

app.get("/login", function(req,res){
    res.sendFile(__dirname + "/pages/login.html")
})

app.listen("3435",function(){
    console.log("Server ON")
})



