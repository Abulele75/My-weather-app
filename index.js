function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;
  
    let apiKey = "4f430cb68t0bf0b27o781c38a281438d";
  
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityElement.innerHTML}&key=${apiKey}`;
  
    axios.get(apiUrl).then(displayWeather);
  }
  
  function displayWeather(response) {
    let degrees = Math.round(response.data.temperature.current);
    let Temperature = document.querySelector(".current-temperature-value");
    Temperature.innerHTML = ` ${degrees} `;
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);