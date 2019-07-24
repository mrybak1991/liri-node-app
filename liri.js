require("dotenv").config();

// variables to link the different NPM packages and other files
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require('moment'); 
moment().format()
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var userOptions = process.argv[2]; 
var userInput = process.argv[3]; 

// switch function to allow for multiple inputs 
    switch (userOptions) {
        case 'concert-this':
            showConcertInfo(userInput);
            break;
        case 'spotify-this-song':
            showSongInfo(userInput);
            break;
        case 'movie-this':
            showMovieInfo(userInput);
            break;
        case 'do-what-it-says':
            showSomeInfo();
            break;
        default:
            console.log("Error! Please enter the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")

    };

// function to search OMDB database 
function showMovieInfo(userInput) {
    if(!userInput){
        userInput = "mr nobody";
    }
    axios.get("https://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
            var movieResults = 
                "--------------------------------------------------------------------" +
                    "\nMovie Title: " + response.data.Title + 
                    "\nYear of Release: " + response.data.Year +
                    "\nIMDB Rating: " + response.data.imdbRating +
                    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                    "\nCountry Produced: " + response.data.Country +
                    "\nLanguage: " + response.data.Language +
                    "\nPlot: " + response.data.Plot +
                    "\nActors/Actresses: " + response.data.Actors;
            console.log(movieResults);
            outputData(movieResults);

    })
    .catch(function (error) {
        console.log(error);
    });
    
};

// function to search spotify 
function showSongInfo(userInput) {
    if(!userInput){
        userInput = "The Sign";
    }
    spotify
    .search({ type: 'track', query: userInput })
    .then(function(response) {
        for (var i = 0; i < 10; i++) {
            var spotifyResults = 
                "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
            outputData(spotifyResults);

        }
    })
    .catch(function(err) {
        console.log(err);
    });
}

// function to search through concert info 
function showConcertInfo() {
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
    .then(function(response) {    
        for (var i = 0; i < response.data.length; i++) {

            var datetime = response.data[i].datetime; 
            var dateArr = datetime.split('T'); 

            var concertResults = 
                "--------------------------------------------------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name + 
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of the Event: " + moment(dateArr[0], "YYYY-DD-MM").format("MM-DD-YYYY"); 
            console.log(concertResults); 
            outputData(concertResults);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
        

}

// bonus to add search results --- added to each function
function outputData(data) {
    fs.appendFile('log.txt', data + '\n', function (err) {
        if (err) throw err
        console.log('file appended')
    })
}


function showSomeInfo() {
    fs.readFile('random.txt', "utf8",function(err, res) {
      if(err) {
        return console.log(err);
      }
      inputArr = res.replace(/"/g, '').trim().split(',');
      showSongInfo(inputArr[1]);
    });
  }