function timeConversion(s) {
  let string = s;
  let stringArray = string.split(":");
  let hour = parseInt(stringArray[0]);
  let minute = parseInt(stringArray[1]);
  let second = parseInt(stringArray[2]);

  if (string.includes("PM")) {
    if (hour < 12) {
      hour += 12;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }

    if (second < 10) {
      second = `0${second}`;
    }
  }

  if (string.includes("AM")) {
    if (hour == 12) {
      hour = "00";
    } else if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }

    if (second < 10) {
      second = `0${second}`;
    }
  }
  let answer = `${hour}:${minute}:${second}`;

  return answer
}

timeConversion("06:40:03AM");
