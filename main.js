"use strict";

/* =====================
GAME
===================== */
let game = {
  lvl: 1,
  score: 0
};

/* =====================
DOM
===================== */
let lvl = document.querySelector(".lvl");
let score = document.querySelector(".score");
let task = document.querySelector(".task");

/* =====================
LEVEL
===================== */
function level1() {
  let a, b, c;
  do {
    a = Math.floor(Math.random() * 5);
    b = Math.floor(Math.random() * 5);
  } while (a + b >= 5);
  c = a + b;

  console.log(a);
  console.log(b);
  console.log(c);
}
level1();

/* =====================
BUILD SCREEN
===================== */
function buildScreen() {
  let task = "1 + 1 = 2";

  redoInfo();
  redoTask(task);
}
buildScreen();

////////////////////////////////////////
function redoInfo() {
  lvl.innerText = `Level: ${game.lvl}`;
  score.innerText = `Score: ${game.score}`;
}

////////////////////////////////////////
function redoTask(x) {
  task.innerText = x;
}
