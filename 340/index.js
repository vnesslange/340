const express = require("express")
const app = express()
const mysql = require('mysql')


app.use(express.static('public'))
app.use(express.json())
app.set('port', 6345)

app.use(function(req, res){
    res.status(404);
    res.send("404");
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send("500");
});

app.listen(app.get('port'), () => {
    console.log(`Express started on port ${app.get('port')}`);
});