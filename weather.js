'use strict';
const img = document.querySelector('.image')
img.classList.add("none");
navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude =  position.coords.longitude;
    const geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c697dfbc470afcc8abcb72e2fa395e60`
    fetch(geoApiUrl)
      .then(res => res.json())
      .then(data => {
        const city = data.name.toUpperCase();
        getCity(city)
      
      });
  });


  function getCity(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    )
      .then((response) => response.json())
      .then((user) => {
        document
          .querySelector("img")
          .setAttribute("src", "http://openweathermap.org/img/w/10d.png");
        const div1 = document.querySelector(".data1");
        div1.innerHTML = "temp is:" + " " + user.main.temp;
        const div2 = document.querySelector(".data2");
        div2.innerHTML = "pressure is:" + " " + user.main.pressure;
        const div3 = document.querySelector(".data3");
        div3.innerHTML =
          "description:" +
          " " +
          user.weather.map((item) => {
            return item.description;
          });
        const div4 = document.querySelector(".data4");
        div4.innerHTML = "humidity is:" + " " + user.main.humidity;

        const div5 = document.querySelector(".data5");
        div5.innerHTML = "speed of wind is:" + " " + user.wind.speed;
        const div6 = document.querySelector(".data6");
        div6.innerHTML = "deg is:" + " " + user.wind.deg;
        const div7 = document.querySelector('.data7');
        const newCity = city[0].toUpperCase() + city.slice(1).toLowerCase()
        div7.innerHTML = 'Your region is:' + ' ' + newCity;

        document.querySelector("#loader").classList.add("none");
        img.classList.remove("none");
      });
  }


