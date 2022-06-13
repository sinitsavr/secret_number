const secretNumber = 32;
let count = 0;

while (true) {
  const userNumber = Number(prompt("Guess the secret number"));
  if (userNumber === secretNumber) {
    alert("You are Lucky, tries:" + count);
    break;
  }
  if (userNumber > secretNumber) {
    count++;
    alert("Number is less");
  }
  if (userNumber < secretNumber) {
    count++;
    alert("Number is more");
  }
}
