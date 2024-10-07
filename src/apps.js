function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisDate = moment().format("MMMM	Do YYYY");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisDate;
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateParisTime();
setInterval(updateParisTime, 1000);

function updateWashington() {
  let washingtonElement = document.querySelector("#washington");
  let washingtonDateElement = washingtonElement.querySelector(".date");
  let washingtonTimeElement = washingtonElement.querySelector(".time");
  let washingtonDate = moment().format("MMMM	Do YYYY");
  let washingtonTime = moment().tz("America/Washington");

  washingtonDateElement.innerHTML = washingtonDate;
  washingtonTimeElement.innerHTML = washingtonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateWashington();
setInterval(updateWashington, 1000);
