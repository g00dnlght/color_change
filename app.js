// Get all the objects.
const colors = ["#867AA9", "#C3C3D6", "#F15025", "#FFFFFF", "#FF0000"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Execute function on button click.
btn.addEventListener("click", function () {
  // Get random number between 0 - 5.
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Generate a random number.
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
