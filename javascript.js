const img = document.querySelector('img');

function getData(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=K2A3SAV8EL5GKDWHDYFYVBLR5`, {mode: 'cors'})
    .then(function(response) {
        //console.log(response.json()); 
        return response.json(); 
    })
    .then(function(response) {
        console.log(response); 
        processData(response); 
    }); 
}

function processData(jsonData) {
    // returns object with only required data (Fahrenheit, Celcius, weather conditions - current and trends)
    console.log(jsonData.currentConditions); 
    console.log(jsonData.currentConditions.temp); 
    console.log(jsonData.currentConditions.conditions); 
    console.log(jsonData.description); 
}

// getData("london")


document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const location = document.getElementById('location').value;
    
    console.log('Fetching weather for location:', location);
    getData(location); 
    
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `Fetching weather data for ${location}...`;
    
    document.getElementById('location').value = '';
});