function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const aHouse = s;
  const zHouse = t;
  const appleTree = a;
  const orangeTree = b;
  const applesArr = apples;
  const orangesArr = oranges;

  let applesHit = 0;
  let orangesHit = 0;

  //figure out distance between appleTree and aHouse

  let appleTreeDistance = aHouse - appleTree;
  let houseLength = zHouse - aHouse;

  //check if number meets that distance
  applesArr.forEach((apple) => {
    if (apple >= appleTreeDistance && apple <= houseLength + appleTreeDistance) {
      applesHit++;
    }
  });

  let orangeTreeDistance = (orangeTree - zHouse) * -1;

  orangesArr.forEach((orange) => {
    if (
      orange <= orangeTreeDistance &&
      orange >= orangeTreeDistance - houseLength
    ) {
      orangesHit++;
    }
  });
  //return
  console.log(applesHit);
  console.log(orangesHit);
}

countApplesAndOranges(2, 3, 1, 5, [2], [-2]);
