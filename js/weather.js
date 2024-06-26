
const WEATHER_API = config.apikey;
 
function onSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`
    
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
}

function onError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);