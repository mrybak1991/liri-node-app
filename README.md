# liri-node-app

Creator: Matt Rybak
Creation Date: 7/27/2019

Instructions: 

1. Navigate to the folder location where liri.js is housed by using your local terminal or something similar like Bash. 
2. Once there, the app allows you to search where a band is playing in concert, details and link to a searched song, OMDB details about a searched movie or run a script based off of what you have listed in a linked file entitled "random.txt" 

3. To try the first search function you will want to type into your terminal 
    "node liri.js concert-this <band name>" 

    The below screenshot is an output of what you should expect to see: 
![Concert-this](/images/concert_this.PNG)

4. To try the second second search function, you will want to type into your terminal: 
    "node liri.js spotify-this-song <song name>" 

    The below screenshot is an output of what you should expect to see: 
![spotifiy-this-song](/images/spotify-this-song.PNG)

5. To try the third search function, you will want to type into your terminal: 
    "node liri.js movie-this <movie name>" 

    The below screenshot is an output of what you should expect to see: 
![movie-this](/images/movie-this.PNG)

6. To try the fourth search function, you will want to type into your terminal: 
    "node liri.js do-what-it-says" -- this will take the search function and search criteria from the random.txt file. 

    The below screenshot is an output of what you should expect to see: 
![do-what-it-says](/images/do_what_it_says.PNG)

7. I have also created an error message if the incorrect syntax is typed in the terminal: 

The below screenshot is the message you will receive: 
![error-message](/images/error_message.PNG)

8. I have also created a function that appends all search results into the log.txt file. Please check it out on my github page to see the different searches performed. 

Hope you enjoy my app! 