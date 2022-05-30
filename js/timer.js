import Sound from "./sounds.js";

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateTimerDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  //TIMER
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateTimerDisplay(minutes, 0);

      if (isFinished) {
        reset();
        Sound().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  function pause() {
    clearTimeout(timerTimeOut);
  }

  return {
    countdown,
    reset,
    updateTimerDisplay,
    pause,
  };
}
