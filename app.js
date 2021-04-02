window.addEventListener("load", () => {
  let lon, lat;
  let tempCurrentEl = document.querySelector(".temperature-current");
  let currentLocationEl = document.querySelector(".location-name");
  let temperatureFeelEl = document.querySelector(".temperature-feels-like");
  let tempIconEl = document.querySelector(".temperature-icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=d6caca170273805e12e327ab4f08010c`;

      console.log(api);

      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const { temp, feels_like, temp_min, temp_max } = data.main;
          const city = data.name;
          const { description, icon } = data.weather[0];
          currentLocationEl.textContent = city;
          tempCurrentEl.textContent = temp + "℉";
          temperatureFeelEl.textContent = description;
          tempIconEl.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
        });
    });
  }
});

//document.getElementById("myImg").src = "hackanm.gif";
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={d6caca170273805e12e327ab4f08010c}

// {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
// base: "stations"
// clouds: {all: 1}
// cod: 200
// coord: {lon: -117.1226, lat: 33.5136}
// dt: 1617397827
// id: 5401395
// main: {temp: 76.01, feels_like: 74.48, temp_min: 72, temp_max: 80.01, pressure: 1017, …}
// name: "Temecula"
// sys: {type: 1, id: 4052, country: "US", sunrise: 1617370447, sunset: 1617415764}
// timezone: -25200
// visibility: 10000
// weather: [{…}]
// wind: {speed: 9.13, deg: 217, gust: 6.98}
// __proto__: Object
