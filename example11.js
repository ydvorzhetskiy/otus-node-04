const factorial = function* () {
  let result = 1;
  let i = 1;
  while (true) {
    result *= i++;
    if (result > 10000) return result;
    yield result;
  }
  return;
}

for (const value of factorial()) {
  console.log(value);
}
