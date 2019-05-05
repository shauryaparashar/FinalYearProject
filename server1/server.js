var express = require('express');
var app = express();
var path = require('path');
var port = 5000||process.env.port;
var sql = require('./db');
var bodyParser = require('body-parser');

app.use('/', express.static(path.join(__dirname,'../publicstatic/SignUp')));
app.use('/', express.static(path.join(__dirname,'../publicstatic')));

app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

//app.post('/',function(req,res) {
  //res.sendfile('index.html',{root: path.join(__dirname,'./SignUp')});
    //});

    app.listen(port,function(){
    console.log('server is running at '+port);
});

app.post('/Homeuploadproduct/homeupload.html',function(req,res) {

  // var query = 'INSERT into userdata(name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")'';
//var query = 'INSERT into userdata (name,email,password,repassword) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
  sql.todolist(query, function (data) {
        //res.sendfile('homeupload.html',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});
      res.sendfile('homeupload.html',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});
  });
});
app.post('/MakeRequest/homemakereq.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('homemakereq.html',{root: path.join(__dirname,'../publicstatic/MakeRequest/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/userrequestpage/userreqlist.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('userreqlist.html',{root: path.join(__dirname,'../publicstatic/userrequestpage/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/ProductCategoryPage2/categorypagebicycle.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('categorypagebicycle.html',{root: path.join(__dirname,'../publicstatic/ProductCategoryPage2/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/ProductCategoryPage2/categorypagecharger.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('categorypagecharger.html',{root: path.join(__dirname,'../publicstatic/ProductCategoryPage2/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/ProductCategoryPage2/categorypageshoes.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('categorypageshoes.html',{root: path.join(__dirname,'../publicstatic/ProductCategoryPage2/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/ProductCategoryPage2/categorypagependrive.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('categorypagependrive.html',{root: path.join(__dirname,'../publicstatic/ProductCategoryPage2/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/ProductCategoryPage2/categorypagewatch.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('categorypagewatch.html',{root: path.join(__dirname,'../publicstatic/ProductCategoryPage2/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});

app.post('/productlist/productlist.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('productlist.html',{root: path.join(__dirname,'../publicstatic/productlist/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});
    });

app.post('/Profilescreen/profilecard.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('profilecard.html',{root: path.join(__dirname,'../publicstatic/Profilescreen/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/Profilescreen/profilecard1.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('profilecard1.html',{root: path.join(__dirname,'../publicstatic/Profilescreen/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
app.post('/requestlist/reqlist.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('reqlist.html',{root: path.join(__dirname,'../publicstatic/requestlist/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});
    });

app.post('/userproductlist/userproductlist.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('userproductlist.html',{root: path.join(__dirname,'../publicstatic/userproductlist/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});
    });

app.post('/ProductCategoryPage/categorypage.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('categorypage.html',{root: path.join(__dirname,'../publicstatic/ProductCategoryPage/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});
    });

app.post('/Editprofilepage/EditProfile.html',function(req,res) {

    //var query = 'INSERT into userdata (name,email,password) VALUES ("' + req.body.name+ '","' + req.body.email+ '","'+ req.body.pswd+ '")';
    //sql.todolist(query, function (data) {
        res.sendfile('EditProfile.html',{root: path.join(__dirname,'../publicstatic/Editprofilepage/')});
      //  res.sendfile('homeupload.css',{root: path.join(__dirname,'../publicstatic/Homeuploadproduct/')});

});
