function timeConversion(s) {
  let nightTime
  let dayTime
  if (s.search("PM")) {
    nightTime = s.replace('PM', "")
    // nightTime = nightTime.charAt(0)+1
  }
  console.log(nightTime)
}

timeConversion("07:05:45PM");
