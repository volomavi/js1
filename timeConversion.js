// function timeConversion(s) {
//   let nightTime
//   let dayTime
//   if (s.search("PM")) {
//     nightTime = s.replace('PM', "")
//     let noonCheck = nightTime.charAt(0)
//     if (noonCheck = '1') {
//       console.log(nightTime)
//     } else {
//       console.log(nightTime.charAt(0,1))
//     }
//     nightTime.charAt(0) = 1
//     console.log(nightTime)
//     // console.log(parseInt(noonCheck) + 2)

//     //if not, then add 12 to the number and return
//   }
// }

// timeConversion("12:05:45PM");

const convertFrom12To24Format = (time12) => {
  const [sHours, minutes, period] = time12
    .match(/([0-9]{1,2}):([0-9]{2}) (AM|PM)/)
    .slice(1);
  const PM = period === "PM";
  const hours = (+sHours % 12) + (PM ? 12 : 0);

  return `${("0" + hours).slice(-2)}:${minutes}`;
};

convertFrom12To24Format("07:05:45PM");
