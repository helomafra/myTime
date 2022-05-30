export default function Controls({ buttonPause, buttonPlay }) {
  function reset() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  return {
    reset,
    play,
    pause,
  };
}
