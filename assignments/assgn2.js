const form = document.querySelector("#weatherForm");
const weatherInfo = document.querySelector(".info");
const historyList = document.querySelector(".searchHistory");
const apiKey = "f4b18f5584a32f586f3d97e8bd56429b";

const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchedCity = city.value;
  getdata(searchedCity);
  console.log(searchedCity);
});
async function getdata(searchedCity) {
  if (searchedCity) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}`,
      );
      const data = await response.json();
      if (data.cod == 200) {
        console.log(data);
        // console.log ("City: " + data.name);
        // console.log ("Temperature: " + (data.main.temp-273.15).toFixed(1) + "C");
        // console.log ("Weather: " + data.weather[0].main);
        // console.log ("Humidity: " + data.main.humidity);
        // console.log("Wind speed: " + data.wind.speed + " m/s");
        weatherInfo.innerHTML = `
            <h2> Weather info: </h2>
            <p>City: ${data.name}</p>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(1)} C</p>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Humidity: ${data.main.humidity}</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        if (!searchHistory.includes(searchedCity)) {
          searchHistory.push(searchedCity);
          localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        }
        showHistory();
      } else {
        weatherInfo.innerHTML = `
            <h2>Weather Info </h2>
            <p>City not found.  </p>
            `;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function showHistory() {
  historyList.innerHTML = "";
  const history = JSON.parse(localStorage.getItem("searchHistory"));
  history.forEach((city) => {
    const li = document.createElement("button");
    li.textContent = city;
    li.addEventListener("click", () => {
      getdata(city);
    });
    historyList.appendChild(li);
  });
}
showHistory();