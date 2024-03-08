let buttons = document.querySelectorAll(".button");
let result = document.querySelector(".result");
let count = 0;
let has_win = false;
let q;
let w;
let e;
function press(id) {
  if (has_win) {
    return;
  }
  if (count % 2 == 0) {
    buttons[id - 1].innerText = "O";
  } else {
    buttons[id - 1].innerText = "X";
  }
  restrict(id);
  count++;
  check("X");
  check("O");
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
function change_color(q, w, e) {
  buttons[q].style.color = "Green";
  buttons[w].style.color = "Green";
  buttons[e].style.color = "Green";
}
function check(user) {
  if (
    buttons[0].innerText == user &&
    buttons[1].innerText == user &&
    buttons[2].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(0, 1, 2);
  } else if (
    buttons[0].innerText == user &&
    buttons[3].innerText == user &&
    buttons[6].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(0, 3, 6);
  } else if (
    buttons[0].innerText == user &&
    buttons[4].innerText == user &&
    buttons[8].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(0, 4, 8);
  } else if (
    buttons[3].innerText == user &&
    buttons[4].innerText == user &&
    buttons[5].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(3, 4, 5);
  } else if (
    buttons[1].innerText == user &&
    buttons[4].innerText == user &&
    buttons[7].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(1, 4, 7);
  } else if (
    buttons[2].innerText == user &&
    buttons[4].innerText == user &&
    buttons[6].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(2, 4, 6);
  } else if (
    buttons[6].innerText == user &&
    buttons[7].innerText == user &&
    buttons[8].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(6, 7, 8);
  } else if (
    buttons[2].innerText == user &&
    buttons[5].innerText == user &&
    buttons[8].innerText == user
  ) {
    result.innerText = `congrats..${user} wins `;
    has_win = true;
    change_color(2, 5, 8);
  }
  if (count == 9 && !has_win) {
    result.innerText = "Oops.. Its draw..";
  }
}
