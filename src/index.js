import { fetchWeatherData } from "./weatherApiInteraction.js";

async function logData(location) {
  try {
    const data = await fetchWeatherData(location);
    const dataJSON = await data.json();
    const city = dataJSON.address;
    const temp = dataJSON.currentConditions.temp;
    const conditions = dataJSON.currentConditions.conditions;
    const feelslike = dataJSON.currentConditions.feelslike;
    const windspeed = dataJSON.currentConditions.windspeed;
    const humidity = dataJSON.currentConditions.humidity;
    console.log({ city, temp, conditions, feelslike, windspeed, humidity });
  } catch (err) {
    console.log("Bad location");
  }
}

logData("London");
logData("Seoul");
logData("Moscow");
logData("Bangkok");
logData("ksdfgjksfdhgksdfjgksdfjg");
