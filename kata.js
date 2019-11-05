const persistence = num => {
  // Simple validation
  if (typeof num !== "number") return null;
  if (num <= 10) return 0;

  let numString = num.toString().split("");
  let nPersistence = 0;

  while (numString.length > 1) {
    numString = numString
      .reduce((prevNumber, currentNumber) => +prevNumber * +currentNumber)
      .toString()
      .split("");

    nPersistence++;
  }

  return nPersistence;
}

console.log(persistence(39));
