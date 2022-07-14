var feedItem = require('../model/feedItem')

var feedItems = [];

var storyOne = feedItem.createfeedItem("World Series wins", "The Yankees have 27 World Series wins", "https://en.wikipedia.org/wiki/Derek_Jeter", "https://th.bing.com/th/id/OIP.wMOcN5Yjn3X1iJPG301qgwHaJI?w=182&h=224&c=7&r=0&o=5&dpr=1.25&pid=1.7");
var storyTwo = feedItem.createfeedItem("Home runs from Aaron Judge", "Aaron Judge has 188 home runs", "https://en.wikipedia.org/wiki/Aaron_Judge", "https://fivethirtyeight.com/wp-content/uploads/2017/09/judge1.jpg");
var storyThree= feedItem.createfeedItem("When did the Yankees become an MLB team", "The Yankees became a team in 1901", "https://www.mlb.com/yankees/schedule/2022-07", "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2546,w_3200/https://yanksgoyard.com/wp-content/uploads/getty-images/2015/10/117869655.jpeg");

feedItems.push(storyOne);
feedItems.push(storyTwo);
feedItems.push(storyThree);


exports.getfeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.savefeedItem = function(req, res) {
	let newfeedItem = feedItem.createfeedItem(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	feedItems.push(newfeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.getfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}

exports.deletefeedItem = function(req, res) {
	feedItems.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.updatefeedItem = function(req, res) {
	// get the existing feedItem from the array
	var updatedfeedItem = feedItems[req.params.feedItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedfeedItem.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedfeedItem.lastName = req.body.lastName;
	if(req.body.email)
		updatedfeedItem.email = req.body.email;
	if(req.body.password)
		updatedfeedItem.password = req.body.password;

	// save the local copy of the user back into the array
	feedItems[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}