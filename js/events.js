import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonReduce,
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundShop,
  buttonSoundFire,
  minutesDisplay,
  secondsDisplay,
  $html,
  buttonLightMode,
  buttonDarkMode,
} from "./elements.js";

export default function Events({ controls, timer, sound }) {
  //EVENTOS
  buttonDarkMode.addEventListener("click", function () {
    buttonLightMode.classList.remove("hide");
    buttonDarkMode.classList.add("hide");
    $html.classList.remove("dark-mode");
    $html.classList.add("white-mode");
  });

  buttonLightMode.addEventListener("click", function () {
    buttonDarkMode.classList.remove("hide");
    buttonLightMode.classList.add("hide");
    $html.classList.add("dark-mode");
    $html.classList.remove("white-mode");
  });

  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.pause();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  //aumentar e diminuir minutos
  buttonIncrease.addEventListener("click", function () {
    sound.pressButton();
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
  });

  buttonReduce.addEventListener("click", function () {
    sound.pressButton();
    if (minutesDisplay.textContent > 5) {
      minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
    } else {
      alert("Não é possível reduzir mais o tempo :(");
    }
  });

  //sons
  buttonSoundNature.addEventListener("click", function () {
    buttonSoundNature.classList.add("active");
    sound.playForest();
  });

  buttonSoundRain.addEventListener("click", function () {
    buttonSoundRain.classList.add("active");
    sound.playRain();
  });

  buttonSoundShop.addEventListener("click", function () {
    buttonSoundShop.classList.add("active");
    sound.playShop();
  });

  buttonSoundFire.addEventListener("click", function () {
    buttonSoundFire.classList.add("active");
    sound.playFire();
  });
}
