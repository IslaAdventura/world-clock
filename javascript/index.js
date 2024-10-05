function updateTime() {
  let orlandoElement = document.querySelector("#orlando");
  let orlandoDateElement = orlandoElement.querySelector(".date");
  let orlandoTimeElement = orlandoElement.querySelector(".time");
  let orlandoTime = moment().tz("America/New_York");

  orlandoDateElement.innerHTML = orlandoTime.format("dddd, MMMM Do, YYYY");
  orlandoTimeElement.innerHTML = orlandoTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format(
    "dddd, MMMM Do, YYYY"
  );
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  let osakaElement = document.querySelector("#osaka");
  let osakaDateElement = osakaElement.querySelector(".date");
  let osakaTimeElement = osakaElement.querySelector(".time");
  let osakaTime = moment().tz("Asia/Tokyo");

  osakaDateElement.innerHTML = osakaTime.format("dddd, MMMM Do, YYYY");
  osakaTimeElement.innerHTML = osakaTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("dddd, MMMM Do, YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  let beijingElement = document.querySelector("#beijing");
  let beijingDateElement = beijingElement.querySelector(".date");
  let beijingTimeElement = beijingElement.querySelector(".time");
  let beijingTime = moment().tz("Asia/Shanghai");

  beijingDateElement.innerHTML = beijingTime.format("dddd, MMMM Do, YYYY");
  beijingTimeElement.innerHTML = beijingTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1);
