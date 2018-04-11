// Init UI
const ui = new UI;

// Init storage
const storage = new Storage();

//get stored locations data
const weatherLocation = storage.getLocationData();

// Init weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    // set location in LS
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
