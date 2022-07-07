//document.getElementById("portal_button").addEventListener("click", () => goToLocation ("https://www.mlb.com/yankees"));

function feedItem(title, body, linkUrl, imageUrl){
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;

}

let storyOne = new feedItem("World Series wins", "The Yankees have 27 World Series wins", "https://en.wikipedia.org/wiki/Derek_Jeter", "https://th.bing.com/th/id/OIP.wMOcN5Yjn3X1iJPG301qgwHaJI?w=182&h=224&c=7&r=0&o=5&dpr=1.25&pid=1.7");
let storyTwo = new feedItem("Home runs from Aaron Judge", "Aaron Judge has 188 home runs", "https://en.wikipedia.org/wiki/Aaron_Judge", "https://fivethirtyeight.com/wp-content/uploads/2017/09/judge1.jpg");
let storyThree = new feedItem("When did the Yankees become an MLB team", "The Yankees became a team in 1901", "https://www.mlb.com/yankees/schedule/2022-07", "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2546,w_3200/https://yanksgoyard.com/wp-content/uploads/getty-images/2015/10/117869655.jpeg");

let stories = [storyOne, storyTwo, storyThree];

function displayItem(){
    for(var i = 0; i < stories.length; i++){
        let item = stories[i];
        document.getElementById("newsfeed").innerHTML += "<img class='feedImage' src='" + item.imageUrl + "'>\n<p><a href = '" + item.linkUrl + "'>" + item.title + "</a><br>" + item.body + "<br><hr></p><br>";
    }
}

window.addEventListener('load', displayItem);

document.getElementById('portal_button').addEventListener("click", () => {window.location = "https://www.mlb.com/yankees"});
