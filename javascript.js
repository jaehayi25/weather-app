const img = document.querySelector('img');

async function getData(location) {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=K2A3SAV8EL5GKDWHDYFYVBLR5`, {mode: 'cors'})
    .then(function(response) {
        //console.log(response.json()); 
        return response.json(); 
    })
    .then(function(response) {
        return processData(response); 
    }); 
}

function processData(jsonData) {
    // returns object with only required data (Fahrenheit, Celcius, weather conditions - current and trends)
    return [jsonData.currentConditions.temp, jsonData.currentConditions.conditions, jsonData.description]; 
}

// getData("london")


document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const location = document.getElementById('location').value;
    
    console.log('Fetching weather for location:', location);
    
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    getData(location).then(result => {
        document.getElementsByClassName('temperature')[0].textContent = `${result[0]}°`;
        document.getElementsByClassName('weather-type')[0].textContent = result[1];
        document.getElementsByClassName('forecast')[0].textContent = result[2];    
    }); 
    // resultDiv.textContent = `Fetching weather data for ${location}...`;
    
    document.getElementById('location').value = '';
});