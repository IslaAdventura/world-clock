function updateTime() {
  let newYorkElement = document.querySelector("#newYork");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName;
  if (event.target.value === "current") {
    cityName = "Current Location";
  } else {
    cityName = cityTimeZone.split("/")[1];
    if (cityName) {
      cityName = cityName.replace(/_/g, " ");
    }
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="single-city-view">
      <div class="single-city-card">
          <div class="single-city-content">
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
              <div class="time">${cityTime.format(
                "h:mm:ss"
              )}<small>${cityTime.format("A")}</small></div>
          </div>
      </div>

      <div>
         <a href="index.html" class="back-button">
              Back to World Clock
         </a>
        </div>
     </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
