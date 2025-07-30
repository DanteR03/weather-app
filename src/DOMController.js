import { fetchWeatherData } from "./weatherApiInteraction.js";

export async function displayWeatherData(location) {
  const dataContainer = document.querySelector(".weather-container");
  try {
    dataContainer.innerHTML = "";
    const data = await fetchWeatherData(location);
    const dataJSON = await data.json();
    const cityPara = document.createElement("p");
    const tempPara = document.createElement("p");
    const feelsTempPara = document.createElement("p");
    const conditionsPara = document.createElement("p");
    const windSpeedPara = document.createElement("p");
    const humidityPara = document.createElement("p");
    cityPara.textContent = dataJSON.address;
    tempPara.textContent = `Temperature: ${dataJSON.currentConditions.temp} F`;
    conditionsPara.textContent = `Conditions: ${dataJSON.currentConditions.conditions}`;
    feelsTempPara.textContent = `Feels like: ${dataJSON.currentConditions.feelslike} F`;
    windSpeedPara.textContent = `Wind speed: ${dataJSON.currentConditions.windspeed} mph`;
    humidityPara.textContent = `Humidity: ${dataJSON.currentConditions.humidity} %`;
    dataContainer.append(
      cityPara,
      tempPara,
      conditionsPara,
      feelsTempPara,
      windSpeedPara,
      humidityPara,
    );
  } catch (err) {
    dataContainer.innerHTML = "";
    const para = document.createElement("p");
    para.textContent = "Failed to fetch data";
    dataContainer.appendChild(para);
  }
}

export function searchData(e) {
  e.preventDefault();
  const cityInput = document.querySelector("#city");
  let cityValue = cityInput.value;
  const countryInput = document.querySelector("#country");
  let countryValue = countryInput.value;
  let searchValue;
  if (countryValue) {
    searchValue = `${cityValue}, ${countryValue}`;
  } else {
    searchValue = cityValue;
  }
  displayWeatherData(searchValue);
}

const searchButton = document.querySelector("button");
searchButton.addEventListener("click", (e) => searchData(e));
