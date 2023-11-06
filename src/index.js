function refreshWeather(response){
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
temperatureElement.innerHTML = Math.round(temperature);
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.condition.description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.temperature.humidity;
let windElement = document.querySelector("#wind");
windElement.innerHTML =  Math.round(response.data.wind.speed);
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
timeElement.innerHTML = formatDate(date);
let iconElement = document.querySelector("#icon");
iconElement.innerHTML = `<img src=${response.data.condition.icon_url} class="wheather-app-icon" />`;

}

function formatDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
}

function serachCity(city){
let apiKey = "b60097c3ddaff0a42bft015121o9bfe4";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
serachCity(searchInput.value);
}


let serachFormElement = document.querySelector("#search-form");
serachFormElement.addEventListener("submit",handleSearchSubmit);
serachCity("Rome");

function displayForecast(){
let days = ["Sat","Sun","Mon","Tue","Wed"];
let forecastHtml = "";
days.forEach(function (day) {
    forecastHtml =
    forecastHtml +
`   <div class="weather-forecast-date">${day}</div>
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" width="60px"/>
    <div class="weather-forecast-temperatures">
        <strong>18°</strong> <span>12°</span>  
    </div>`;
});
let forecast = document.querySelector("#forecast");
forecast.innerHTML = forecastHtml;
}
displayForecast();



