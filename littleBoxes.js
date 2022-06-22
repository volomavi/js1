function sortBoxes(boxList) {
  boxList = boxList.sort();
  let alphaDict = {};
  let gammaDict = {};
  let alphaPairs;
  let gammaPairs;
  let result = [];

  boxList.forEach((box) => {
    let splitBox = box.split(" ");
    let boxKey = splitBox.shift();
    let isNum = parseInt(splitBox[0][0]);

    if (isNaN(isNum)) {
      alphaDict[boxKey] = splitBox.join(" ");
    } else {
      gammaDict[boxKey] = splitBox.join(" ");
    }
  });
  
  alphaPairs = Object.keys(alphaDict).map(function (key) {
    return [key, alphaDict[key]];
  });

  alphaPairs.sort(function(first, second) {
    return first[1].localeCompare(second[1]);
  });

  gammaPairs = Object.keys(gammaDict).map(function (key) {
    return [key, gammaDict[key]];
  });

  gammaPairs.sort(function(first, second) {
    return first[1].localeCompare(second[1]);
  });

  alphaPairs.forEach((pair) => {
    result.push(pair.join(" "));
  });

  gammaPairs.forEach((pair) => {
    result.push(pair.join(" "));
  });
  console.log(result)
}

sortBoxes([
  "t2 13 121 98",
  "r1 box ape bit",
  "b4 xi me nu",
  "b3 xi me nu",
  "br8 eat nim did",
  "w1 has uni gry",
  "f3 52 54 31",
]);
