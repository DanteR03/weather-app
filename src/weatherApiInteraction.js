export function fetchWeatherData(location) {
  const apiKey = "XECHBMMPSUW4ANN83WW8HLR8Y";
  const weatherData = fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}`,
    { mode: "cors" },
  );
  return weatherData;
}
