'use strict'

const btnRandom = document.getElementById("btn_random")
const text = document.getElementById('text2');

 function checkNumber() {
    const userInput = Number(document.getElementById("userInput").value);
    const randomNumValue = parseInt(text.textContent);

    if (userInput === randomNumValue) {
      alert("Правильно!");
    } else {
      alert("Неправильно. Попробуйте еще раз.");
      location.reload()
    }

  }
  btnRandom.addEventListener('click',checkNumber )

function randomNum() {

    return Math.floor(Math.random() * 11 );
}


text.textContent = randomNum();

