var request = require("request");
var cheerio = require("cheerio");


// perfrom request
request('https://xkcd.com', function (error, response, html) {
    if (!error && response.statusCode == 200) {
    // console.log(html)
    // pass DOM to cheerio
        var $ = cheerio.load(html);
        console.log($('#comic img').attr('title'))

    }
});
