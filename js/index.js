"use strict";
//import { error } from "./pop-up.js";
function $(selector) {
  return document.querySelector(selector);
}

$("#sound").play();

var score = 0;
var shoot = $(".right_btn");
var up_btn = $(".left_btn");
setInterval(function () {
  var d_value = $(".dinasor");
  var dxvalue = parseInt(
    window.getComputedStyle(d_value, null).getPropertyValue("left")
  );
  if (dxvalue > 100) {
    error("You've Failed ! Please Try Again");
    console.log(dxvalue);
    $(".shooter").style.display = "none";
    $(".dinasor").style.display = "none";
  }
  // console.log(dxvalue);
}, 1000);
shoot.addEventListener("click", function (e) {
  var dinasor = $(".dinasor");
  var shooter = $(".shooter");
  e.preventDefault();
  $(".shootbtn").src = "action/gun-hover.png";
  shooter.classList.remove("shooter");
  shooter.classList.add("shooting");
  Die(dinasor);
  setTimeout(function () {
    shooter.classList.remove("shooting");
    shooter.classList.add("shooter");
    $("#score").style.display = "block ";
    $("#score").textContent = "Your Scor : " + score;
  }, 2000);
});

up_btn.addEventListener("click", function (e) {
  var shooter = $(".shooter");
  e.preventDefault();
  shooter.classList.add("jump");
  setTimeout(function () {
    shooter.classList.remove("jump");
  }, 2000);
});

function Die(dinasor) {
  setTimeout(function () {
    dinasor.classList.remove("dinasor");
    dinasor.classList.add("die1");
    setTimeout(function () {
      dinasor.classList.remove("die1");
      dinasor.classList.add("die2");
      setTimeout(function () {
        dinasor.classList.remove("die2");
        dinasor.classList.add("die3");
        setTimeout(function () {
          dinasor.classList.remove("die3");
          dinasor.classList.add("die4");
          setTimeout(function () {
            dinasor.classList.remove("die4");
            dinasor.classList.add("die5");
            setTimeout(function () {
              dinasor.classList.remove("die5");
              dinasor.classList.add("dinasor");
              score = score + 10;
            }, 3000);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 500);
}

const error = (msg) => {
  //$("body").style.backgroundColor = "#0000007f";
  $("#error").style.display = "block";
  $("#error").innerHTML = `
    <div id="modal_page" class="w3-container">
        <div id="" class="log_pop" align="center">
          <img src="icons/warning.png" />
          <br />
          <strong id="err">${msg}</strong>
          <center>
            <button
              onclick="ClosError()"
              type="submit"
              id="okBtn">
              OK
            </button>
          </center>
        </div>
      </div>
  `;
};
const ClosError = () => {
  $(".shooter").style.display = "block";
  $(".dinasor").style.display = "block";
  $("#error").style.display = "none";
};
