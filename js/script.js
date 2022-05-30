import Sound from "./sounds.js";
import Timer from "./timer.js";
import Controls from "./controls.js";
import Events from "./events.js";
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundShop,
  buttonSoundFire,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

//controles
const controls = Controls({
  buttonPause,
  buttonPlay,
});

//contador
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
});

//som
const sound = Sound({
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundShop,
  buttonSoundFire,
});

Events({ controls, timer, sound });
