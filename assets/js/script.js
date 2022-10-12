//create variable for API key for weather API
var APIKey = "929102aeeecc47cdcf4b64fb757bbffc"

//create variables for latitude and longitude so we can search for those cities
var lat;
var lon;

//global variables
var city = $('#search-city')
var pastCities = $('#past')
var saveBtn =$('#saveBtn')
var fiveDay =$('#fiveDay')
var date = moment();
$("#date").text(date.format("MMM Do, YYYY"));

//create a Query URL to make API Call - 
var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

var currentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIKey;

//make the API call using fetch

// when city is entered and button is pushed
saveBtn.on("click", function click(event) {
    event.preventDefault();
    // city.val();
    // getCurrent(event);
    console.log("clicked");
    });
// console.log(result)

//city info is saved in local-storage
    //a button is created and put in a list with city info attached

    // This is the function to get and display the current conditions on Open Weather Maps
    var getCurrent = (event) => {
        event.preventDefault()
        // get the city name from the search box
        city.val();
        // Set the queryURL to fetch from API using weather search - added units=imperial to fix
        fetch(currentURL)
        .then((result) => {
            return result.json();
        })
        // .then((result) => {
            //     // Save city to local storage
            //     function save () {
                //       localStorage.setItem("city", city)  
                //     }
                //     save(city);
    }

    // Render cities list
    // renderCities();
    // Obtain the 5day forcast for the searched city
    // getFiveDayForcast(event);

    //when past city is clicked on, data for that city is displayed