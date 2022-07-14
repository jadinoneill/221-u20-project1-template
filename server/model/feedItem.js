function feedItem(title, body, linkUrl, imageUrl){
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
    
}

exports.createfeedItem = function(title, body, linkUrl, imageUrl) {
    return new feedItem(title, body, linkUrl, imageUrl);
};

console.log("model running");

