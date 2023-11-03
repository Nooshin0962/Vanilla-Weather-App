function refreshWeather(response){
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
temperatureElement.innerHTML = Math.round(temperature);
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
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


