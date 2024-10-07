function updateParisTime() {
  let parisElement = document.querySelector("#paris");

  let parisDateElement = document.querySelector(".date");
  let parisTimeElement = document.querySelector(".time");
  let parisDate = moment().format("MMMM	Do YYYY");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisDate;
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateParisTime();
setInterval(updateParisTime, 1000);

function updateTokyo() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = document.querySelector(".date");
  let tokyoTimeElement = document.querySelector(".time");
  let tokyoDate = moment().format("MMMM	Do YYYY");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoDate;
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTokyo();
setInterval(updateTokyo, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
let citySelectorElement = document.querySelector("#city");
citySelectorElement.addEventListener("change", updateCity);
