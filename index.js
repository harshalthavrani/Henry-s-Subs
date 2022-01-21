//Name: Harshal Thavrani
// Student #: 8733610
// Section  : 3
// Date     : 2/8/2021

//Declaring Variables
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mywebsite',
{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const Contact = mongoose.model('Contact', {
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    postcode: String,
    province: String,
    hookladder: String,
    steak: String,
    meatball: String,
    deliverytime: String,
    shippingcharges: String,
    subtotal: String,
    taxp: String,
    taxprice: String,
    total: String

});
const{check, validationResult} = require('express-validator');
var myApp = express();
//Parse Application/x-www-form-uploaded 
myApp.use(bodyParser.urlencoded({extended: false}));
myApp.use(bodyParser.json());
myApp.set('views', path.join(__dirname,'views'));
myApp.set('view engine', 'ejs');
//path for external Validation Javascript
myApp.use(express.static(__dirname + '/public'));
//gets The Index File
myApp.get('/', function (req, res)
{
    res.render('index');
})
//Posts the Index File
myApp.post('/index',
//Creating a Function
 function(req,res){
     console.log(req.body);
     //Declaring Variables
         var name = req.body.name;
         var email = req.body.email;
         var phone = req.body.phone;
         var address = req.body.address;
         var city = req.body.city;
         var postcode = req.body.postcode;
         var province = req.body.province;
         var hookladder = req.body.hookladder;
         var steak = req.body.steak;
         var meatball = req.body.meatball;
         var deliverytime = req.body.deliverytime;
         var shippingcharges,ship;
         //Delivery Time Modifications Conditions
         if(deliverytime=="1 Day")
         {
             shippingcharges = " $30";
             ship = 30;
         }
         if(deliverytime=="2 Days")
         {
             shippingcharges = " $25";
             ship = 25;
         }
         if(deliverytime=="3 Days")
         {
             shippingcharges = " $20";
             ship = 20
         }
         if(deliverytime=="4 Days")
         {
             shippingcharges = " $15";
             ship = 15;
         }
         //Price Validation 
         if(hookladder=="")
         {
             hookladder = 0;
         }
         if(steak=="")
         {
             steak = 0;
         }
         if(meatball=="")
         {
             meatball = 0;
         }
         //Declaring Variables
         var hookprice = hookladder * 8.50;
         var steakprice = steak * 10;
         var meatballprice = meatball * 7;
         var subtotal = hookprice + steakprice + meatballprice;
         var taxprice,taxp,total;
         //Conditions for Tax Differentiation according to Provinces
         if(province=="Alberta")
         {
             taxp = "5%";
             taxprice = (subtotal * 5)/100;
             total = subtotal + taxprice +ship;
         }
         if(province=="British Columbia")
         {
             taxp = "8%";
             taxprice = (subtotal * 8)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Manitoba")
         {
             taxp = "9%";
             taxprice = (subtotal * 9)/100;
             total = subtotal + taxprice +ship;
             
         }
         if(province=="Newfoundland and Labrador")
         {
            taxp = "12%";
             taxprice = (subtotal * 12)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="New Brunswick")
         {
            taxp = "17%";
             taxprice = (subtotal * 17)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Northwest Territories")
         {
            taxp = "2%";
             taxprice = (subtotal * 2)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Nova Scotia")
         {
            taxp = "16%";
             taxprice = (subtotal * 16)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Nunavut")
         {
            taxp = "3%";
             taxprice = (subtotal * 3)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Ontario")
         {
             taxp = "13%";
             taxprice = (subtotal * 13)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Prince Edward Island")
         {
             taxp = "15%";
             taxprice = (subtotal * 15)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Quebec")
         {
             taxp = "18%";
             taxprice = (subtotal * 18)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Saskatchewan")
         {
             taxp = "11%";
             taxprice = (subtotal * 11)/100;
             total = subtotal + taxprice +ship;             
         }
         if(province=="Yukon")
         {
             taxp = "10%";
             taxprice = (subtotal * 10)/100;
             total = subtotal + taxprice +ship;             
         }
         //Renders The Invoice File
         res.render('invoice', {
             name:name,
             email:email,
             phone:phone,
             address:address,
             city:city,
             postcode:postcode,
             province:province,
             hookladder:hookladder,
             steak:steak,
             meatball:meatball,
             deliverytime:deliverytime,
             shippingcharges:shippingcharges,
             subtotal:subtotal,
             taxp:taxp,
             taxprice:taxprice,
             total:total
         })
 })
 //Gets the Invoice File
 myApp.get('/invoice', function (req, res)
{
    res.render('invoice');
})
myApp.get('/contactlist', function (req, res) {
    //Finding all the records stored in database
    Contact.find({}).exec(function (err, contacts) {
        res.render('contactlist', { contacts: contacts });
    })
})
myApp.listen(8080);
console.log("My site is running at https://localhost8080");