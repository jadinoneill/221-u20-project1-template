const express = require('express')
const app = express();
var bodyParser = require('body-parser');
app.use(express.static('client/public'));
app.use(bodyParser.json({ type: 'application/json' }));

let feedItems = require('./controller/feedController');

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.route('/api/feedItems')
	.get(feedItems.getfeedItems)
	.post(feedItems.savefeedItem)

app.route('/api/feedItems/:feedItemId')
	.get(feedItems.getfeedItem)
	.delete(feedItems.deletefeedItem)
	.patch(feedItems.updatefeedItem)


var metsItems = require('./controller/metsController');

app.route('/api/metsItems')
	.get(metsItems.getmetsItems)
	.post(metsItems.savemetsItem)

app.route('/api/metsItems/:metsItemId')
	.get(metsItems.getmetsItem)
	.delete(metsItems.deletemetsItem)
	.patch(metsItems.updatemetsItem)

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})