/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/**
 * What I learn in this workshop
 * How to createour funamental game variables
 * How to generate a random number
 * How to manipulate the DOM
 * How to read from the DOM
 * How to change CSS style
 */

// เขียนแบบ Clean มากยิ่งขึ้น
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('#current-' + activePlayer).textContent = dice;
// select the elelment
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// var x = document.querySelector('#score-0').textContent;
// .textcontent เป็นการ assign html แบบเปล่าๆ ให้กับ html 
// .innerHTML คือการเข้าไปเปลี่ยนหรือว่าเขียน  html ให้มีค่าตามที่เราต้องการ 

// hide the picture for the first time
document.querySelector(".dice").style.display = "none";

// set the score to zero before the game starting
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// addEventListener is when we click this bottom what we want it to do
// annymous function
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1.Random number
  // 1.1 Math.floor คือ ให้ค่าภายใน function เป็นจำนวนเต็ม
  // 1.2 Math.floor(Math.random() * 6) + 1
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2.Display the result
  // 2.1 create the array for query the class html
  // 2.2 การจัดการกับ css ให้รูปภาพแสดงเป็น block
  // 2.3 Random การสุ่มรูปภาพ โดยนำค่าที่ได้มาสุ่มคู่กับ function random
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";

  //3.Update the round score If the rolled number was NOT a 1
});