// Get all the objects.
const colors = [
  "#867AA9",
  "#C3C3D6",
  "#F15025",
  "#FFFFFF",
  "#FF0000",
  "FFF2222",
  "#B22222",
  "#800080",
  "#FFD700",
  "#808000",
  "#008000",
  "#90EE90",
  "#20B2AA",
  "#00FFFF",
  "#E0FFFF",
  "#5F9EA0",
  "#87CEFA",
  "#191970",
  "#00008B",
  "#0000CD",
  "#8A2BE2",
  "#4B0082",
  "#9400D3",
  "#DDA0DD",
  "#FF69B4",
  "#A0522D",
  "#D2691E",
  "#F4A460",
  "#D2B48C",
  "#FFE4B5",
  "#FFDAB9",
  "#FFF0F5",
  "#FFEFD5",
  "#708090",
  "#FFFAF0",
  "#696969",
  "#C0C0C0",
  "#D3D3D3",
  "#F5F5F5",
];
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
