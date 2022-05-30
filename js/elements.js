const $html = document.querySelector("html");
const buttonLightMode = document.querySelector(".light-theme");
const buttonDarkMode = document.querySelector(".dark-theme");
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonIncrease = document.querySelector(".increase-time");
const buttonReduce = document.querySelector(".reduce-time");
const buttonSoundNature = document.querySelector(".nature");
const buttonSoundRain = document.querySelector(".rain");
const buttonSoundShop = document.querySelector(".shop");
const buttonSoundFire = document.querySelector(".fire");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

export {
  $html,
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
  buttonLightMode,
  buttonDarkMode,
};
