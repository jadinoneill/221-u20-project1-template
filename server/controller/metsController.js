var metsItem = require('../model/metsItem')

var metsItems = [];

var metsOne = metsItem.createmetsItem("Jacob", "Degrom", "48", "Starting Pitcher");
var metsTwo = metsItem.createmetsItem("Francisco", "Lindor", "12", "Shortstop");
var metsThree= metsItem.createmetsItem("Starling", "Marte", "6", "Center Field");

metsItems.push(metsOne);
metsItems.push(metsTwo);
metsItems.push(metsThree);


exports.getmetsItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(metsItems);
}

exports.savemetsItem = function(req, res) {
	let newmetsItem = metsItem.createmetsItem(req.body.firstName, req.body.lastName, req.body.number, req.body.position
		
		
		
		
		);
	metsItems.push(newmetsItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(metsItems);
}

exports.getmetsItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(metsItems[req.params.metsItemId]);
}

exports.deletemetsItem = function(req, res) {
	metsItems.splice(req.params.metsItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(metsItems);
}

exports.updatemetsItem = function(req, res) {
	// get the existing metsItem from the array
	var updatedmetsItem = metsItems[req.params.metsItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedmetsItem.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedmetsItem.lastName = req.body.lastName;
	if(req.body.email)
		updatedmetsItem.number = req.body.number;
	if(req.body.password)
		updatedmetsItem.position = req.body.position;

	// save the local copy of the user back into the array
	metsItems[req.params.metsItemId] = updatedmetsItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(metsItems[req.params.metsItemId]);
}