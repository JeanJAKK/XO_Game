let player = "X";

function handleClick(event) {
  if (event.target.textContent) {
    return;
  }

  event.target.textContent = player;

  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}

const gamaCells = document.querySelectorAll("#grid > div");

for (const cell of gamaCells) {
  cell.addEventListener("click", handleClick);
}
