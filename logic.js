let buttons = document.querySelectorAll(".button");
let result = document.querySelector(".result");
let count = 0;
let has_win = false;

function press(id) {
  if (has_win) {
    return;
  }
  if (count % 2 == 0) {
    buttons[id - 1].innerText = "O";

    // count++;
  } else {
    buttons[id - 1].innerText = "X";

    // count++;
  }
  restrict(id);
  count++;
  check();
}

function restrict(id) {
  buttons[id - 1].classList.add("disable_btn");
}

function unRestrict(id) {
  buttons[id].classList.remove("disable_btn");
}

function erase() {
  for (let i = 0; i < buttons.length - 1; i++) {
    buttons[i].innerText = "";
    buttons[i].style.color = "";
    unRestrict(i);
    count = 0;
    has_win = false;
  }
  result.innerText = "";
}
function check() {
  if (
    buttons[0].innerText == "X" &&
    buttons[1].innerText == "X" &&
    buttons[2].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[0].style.color = "Green";
    buttons[1].style.color = "Green";
    buttons[2].style.color = "Green";
  } else if (
    buttons[0].innerText == "X" &&
    buttons[3].innerText == "X" &&
    buttons[6].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[0].style.color = "Green";
    buttons[3].style.color = "Green";
    buttons[6].style.color = "Green";
  } else if (
    buttons[0].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[8].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[0].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[8].style.color = "Green";
  } else if (
    buttons[3].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[5].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[3].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[5].style.color = "Green";
  } else if (
    buttons[1].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[7].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[1].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[7].style.color = "Green";
  } else if (
    buttons[2].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[6].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[2].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[6].style.color = "Green";
  } else if (
    buttons[6].innerText == "X" &&
    buttons[7].innerText == "X" &&
    buttons[8].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[6].style.color = "Green";
    buttons[7].style.color = "Green";
    buttons[8].style.color = "Green";
  } else if (
    buttons[2].innerText == "X" &&
    buttons[5].innerText == "X" &&
    buttons[8].innerText == "X"
  ) {
    has_win = true;
    result.innerText = "congrats.. X won";
    buttons[2].style.color = "Green";
    buttons[5].style.color = "Green";
    buttons[8].style.color = "Green";
  }
  // now  for player y
  else if (
    buttons[0].innerText == "O" &&
    buttons[1].innerText == "O" &&
    buttons[2].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[0].style.color = "Green";
    buttons[1].style.color = "Green";
    buttons[2].style.color = "Green";
  } else if (
    buttons[0].innerText == "O" &&
    buttons[3].innerText == "O" &&
    buttons[6].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[0].style.color = "Green";
    buttons[3].style.color = "Green";
    buttons[6].style.color = "Green";
  } else if (
    buttons[0].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[8].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[0].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[8].style.color = "Green";
  } else if (
    buttons[3].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[5].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[3].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[5].style.color = "Green";
  } else if (
    buttons[1].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[7].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[1].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[7].style.color = "Green";
  } else if (
    buttons[2].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[6].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[2].style.color = "Green";
    buttons[4].style.color = "Green";
    buttons[6].style.color = "Green";
  } else if (
    buttons[6].innerText == "O" &&
    buttons[7].innerText == "O" &&
    buttons[8].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[6].style.color = "Green";
    buttons[7].style.color = "Green";
    buttons[8].style.color = "Green";
  } else if (
    buttons[2].innerText == "O" &&
    buttons[5].innerText == "O" &&
    buttons[8].innerText == "O"
  ) {
    has_win = true;
    result.innerText = "congrats.. O won";
    buttons[2].style.color = "Green";
    buttons[5].style.color = "Green";
    buttons[8].style.color = "Green";
  }
  if (count == 9 && !has_win) {
    result.innerText = "Oops.. Its draw..";
  }
}
