"use strict";

/* =====================
GAME INFOS
===================== */
let game = {
  lvl: 1,
  score: 0,
  solution: 0
};

/* =====================
DOM
===================== */
let lvl = document.querySelector(".lvl");
let score = document.querySelector(".score");
let task = document.querySelector(".task");
let option_li = document.querySelectorAll(".option_li");

/* =====================
PLACE EVENTLISTENER
===================== */
option_li.forEach(element => {
  element.addEventListener("click", () => click(element));
});

/* =====================
BUILD SCREEN
===================== */
function buildScreen() {
  checkLevel();
  redoInfo();
  let task = mathProblem();
  redoTask(`${task.a} + ${task.b} = ?`);
  placeOptions();
  placeCorrect(task.c);
}
buildScreen();

////////////////////////////////////////
function checkLevel() {
  if (game.score >= 100) {
    game.score = 0;
    game.lvl++;
  }
}

////////////////////////////////////////
function redoInfo() {
  lvl.innerText = `Level: ${game.lvl}`;
  score.innerText = `Score: ${game.score}`;
}

////////////////////////////////////////
function mathProblem() {
  let a = 0;
  let b = 0;
  do {
    a = Math.floor(Math.random() * (game.lvl * 5));
    b = Math.floor(Math.random() * (game.lvl * 5));
  } while (a + b >= game.lvl * 5);
  game.solution = a + b;
  return {
    a: a,
    b: b
  };
}

////////////////////////////////////////
function redoTask(x) {
  task.innerText = x;
}

////////////////////////////////////////
function placeOptions() {
  let x = [];

  while (x.length < option_li.length) {
    let y = Math.floor(Math.random() * (game.lvl * 5));
    if (x.includes(y)) {
    } else {
      x.push(y);
    }
  }

  for (let i = 0; i < option_li.length; i++) {
    option_li[i].innerText = x[i];
    option_li[i].value = x[i];
  }
}

////////////////////////////////////////
function placeCorrect() {
  option_li.forEach(element => {
    console.log(element);
  });

  let x = Math.floor(Math.random() * option_li.length);
  option_li[x].innerText = game.solution;
  option_li[x].value = game.solution;
}

/* =====================
CLICK
===================== */
function click(element) {
  if (element.value == game.solution) {
    win(element);
  } else {
    lose(element);
  }
  redoInfo();
}

////////////////////////////////////////
function win(element) {
  game.score += 10;
  element.classList.add("correct");
  buildScreen();
}

////////////////////////////////////////
function lose(element) {
  if (game.score > 0) {
    game.score -= 10;
  }
  element.classList.add("wrong");
}
