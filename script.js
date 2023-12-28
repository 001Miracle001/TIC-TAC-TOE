let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let winnerbutton = document.querySelector("#winner");
let turn0 = true;
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "x";
      turn0 = false;
    } else {
      box.innerText = "o";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

resetbutton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});

const checkwinner = () => {
  for (let pattern of winpattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner", val1);
        winnerbutton.innerText = val1 + " is the winner";
      }
    }
  }
};