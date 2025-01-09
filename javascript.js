const img = document.querySelector('img');

function getData(location) {
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=K2A3SAV8EL5GKDWHDYFYVBLR5', {mode: 'cors'})
    .then(function(response) {
        //console.log(response.json()); 
        return response.json(); 
    })
    .then(function(response) {
        console.log(response); 
    }); 
}

function processData(jsonData) {
    // returns object with only required data (Fahrenheit, Celcius, weather conditions - current and trends)
}