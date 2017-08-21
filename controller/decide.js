
var db = require("../models");
var express = require("express");
// var path = require("path");
// var app = express.Router();


// module.exports  = function(app) {
var router = express.Router();
	// user side routes
	router.get("/:userId?", function(req, res) {
		var userId = req.params.userId;
		var userName = "";
		console.log(userId)
		db.Users.findOne({
			where: {
				id: userId
			}
		}).then(function(results) {
			userName = results.userName;
			console.log("name: " + results.userName);
		})
		if (userId) {

			console.log("individual working")
			res.render("index",{userName:userName} )
		} else {
			console.log("main page working");
			res.render("index");
		}	
	});
	router.get("/user/signIN", function(req, res) {
		console.log("current working");
		res.render("signIn");
	});
	router.get("/user/new", function(req, res) {
		console.log("current working");
		res.render("newUser");
	});

	
	// bussiness side routes
	router.get("/business/new", function(req, res) {
		console.log("get working")
		 res.render("newBusiness")	 
	});

	router.get("/business", function(req, res) {
		console.log("business working");
		res.render("bMain")
	})
	router.get("/business/current", function(req, res) {
		console.log("current working");
		res.render("current")
	});



// }	
module.exports = router;