const statusDOM = document.getElementById("status");
const restart_btn = document.querySelector(".restart_btn");

let [a1, a2, a3, a4, a5, a6, a7, a8, a9] = document.querySelectorAll(".box");
const boxDom = document.querySelectorAll(".box");

let player = "X";

restart_btn.addEventListener("click", () => {
  boxDom.forEach((box) => {
    box.value = "";
    statusDOM.innerHTML = "PLAY NOW";
    statusDOM.style.color = "green";
    box.disabled = false;
    box.style.backgroundColor = "white";
    player = "X";
  });
});

function startGame() {
  boxDom.forEach((box) => box.addEventListener("click", () => chooseArea(box)));
}

function chooseArea(box) {
  if (box.value === "") {
    box.value = player;
    turnPlayer();
  } else {
    statusDOM.innerHTML = "KUTU DOLU LÜTFEN BAŞKA BİR YERE DENEYİNİZ!!!";
    statusDOM.style.color = "red";
  }
  win();
}

function turnPlayer() {
  if (player === "X") {
    player = "O";
  } else player = "X";
}

function win() {
  winRow();
  winColumns();
  winCross();
}
function Color() {}
//disabled input
function Disable() {
  boxDom.forEach((element) => {
    element.disabled = true;
  });
}

//win control start
function winRow() {
  if (a1.value == "X" && a2.value == "X" && a3.value == "X") {
    statusDOM.innerHTML = "X KAZANDI";
    a1.style.backgroundColor = "red";
    a2.style.backgroundColor = "red";
    a3.style.backgroundColor = "red";
    Disable();
    // console.log("x kazandı");
  } else if (a4.value == "X" && a5.value == "X" && a6.value == "X") {
    // console.log("x kazandı");
    a4.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a6.style.backgroundColor = "red";

    statusDOM.innerHTML = "X KAZANDI";
    Disable();
  } else if (a7.value == "X" && a8.value == "X" && a9.value == "X") {
    statusDOM.innerHTML = "X KAZANDI";
    a7.style.backgroundColor = "red";
    a8.style.backgroundColor = "red";
    a9.style.backgroundColor = "red";

    // console.log("x kazandı");
    Disable();
  }

  //win o

  if (a1.value == "O" && a2.value == "O" && a3.value == "O") {
    statusDOM.innerHTML = "O KAZANDI";
    // console.log("O kazandı");
    a1.style.backgroundColor = "red";
    a2.style.backgroundColor = "red";
    a3.style.backgroundColor = "red";

    Disable();
  } else if (a4.value == "O" && a5.value == "O" && a6.value == "O") {
    statusDOM.innerHTML = "O KAZANDI";
    // console.log("O kazandı");
    a4.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a6.style.backgroundColor = "red";

    Disable();
  } else if (a7.value == "X" && a8.value == "O" && a9.value == "O") {
    statusDOM.innerHTML = "X KAZANDI";
    // console.log("O kazandı");
    a7.style.backgroundColor = "red";
    a8.style.backgroundColor = "red";
    a9.style.backgroundColor = "red";
    Disable();
  }
}

function winColumns() {
  if (a1.value == "X" && a4.value == "X" && a7.value == "X") {
    statusDOM.innerHTML = "X KAZANDI";

    a1.style.backgroundColor = "red";
    a4.style.backgroundColor = "red";
    a7.style.backgroundColor = "red";

    // console.log("X kazandı");
    Disable();
  } else if (a2.value == "X" && a5.value == "X" && a8.value == "X") {
    statusDOM.innerHTML = "X KAZANDI";
    a2.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a8.style.backgroundColor = "red";
    // console.log("X kazandı");
    Disable();
  } else if (a3.value == "X" && a6.value == "X" && a9.value == "X") {
    statusDOM.innerHTML = "X KAZANDI";
    a3.style.backgroundColor = "red";
    a6.style.backgroundColor = "red";
    a9.style.backgroundColor = "red";
    // console.log("X kazandı");
    Disable();
  }

  //win o

  if (a1.value == "O" && a4.value == "O" && a7.value == "O") {
    statusDOM.innerHTML = "O KAZANDI";
    a1.style.backgroundColor = "red";
    a4.style.backgroundColor = "red";
    a7.style.backgroundColor = "red";
    // console.log("O kazandı");
    Disable();
  } else if (a2.value == "O" && a5.value == "O" && a8.value == "O") {
    statusDOM.innerHTML = "O KAZANDI";

    a2.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a8.style.backgroundColor = "red";
    // console.log("O kazandı");
    Disable();
  } else if (a3.value == "O" && a6.value == "O" && a9.value == "O") {
    statusDOM.innerHTML = "O KAZANDI";
    // console.log("O kazandı");
    a3.style.backgroundColor = "red";
    a6.style.backgroundColor = "red";
    a9.style.backgroundColor = "red";
    Disable();
  }
}

function winCross() {
  if (a1.value == "X" && a5.value == "X" && a9.value == "X") {
    statusDOM.innerHTML = "X KAZANDI";
    a1.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a9.style.backgroundColor = "red";
    // console.log("X kazandı");
    Disable();
  } else if (a3.value == "X" && a5.value == "X" && a7.value == "X") {
    statusDOM.innerHTML = "X KAZANDI";
    a3.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a7.style.backgroundColor = "red";
    // console.log("X kazandı");
    Disable();
  }

  //win o
  if (a1.value == "O" && a5.value == "O" && a9.value == "O") {
    statusDOM.innerHTML = "O KAZANDI";
    // console.log("O kazandı");
    a1.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a9.style.backgroundColor = "red";
    Disable();
  } else if (a3.value == "O" && a5.value == "O" && a7.value == "O") {
    statusDOM.innerHTML = "O KAZANDI";
    a3.style.backgroundColor = "red";
    a5.style.backgroundColor = "red";
    a7.style.backgroundColor = "red";
    // console.log("O kazandı");
    Disable();
  }
}

startGame();
