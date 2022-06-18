function timeConversion(s) {
  let string = s;
  let stringArray = string.split(":");
  let hour = parseInt(stringArray[0]);
  let minute = parseInt(stringArray[1]);
  let second = parseInt(stringArray[2]);

  let nightTime;
  let dayTime;

  if (string.search("PM")) {
    nightTime = string.replace("PM", "");
    if (hour < 12) {
      hour += 12;
    }
    if (minute < 11) {
      minute = `0${minute}`;
    }

    if (second < 11) {
      second = `0${second}`;
    }
  }

  if (string.search("AM")) {
    dayTime = string.replace("AM", "");
    if (hour == 12) {
      hour = "00";
    }
  }
  let answer = `${hour}:${minute}:${second}`;
  console.log(answer);
}

timeConversion("07:05:45PM");
