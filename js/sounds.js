export default function ({
  buttonSoundNature,
  buttonSoundRain,
  buttonSoundShop,
  buttonSoundFire,
}) {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const forest = new Audio("./som/Floresta.wav");
  const rain = new Audio("./som/Chuva.wav");
  const shop = new Audio("./som/Cafeteria.wav");
  const fire = new Audio("./som/Lareira.wav");

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function changeSound(nowPlaying, stopOne, stopTwo, stopThree) {
    nowPlaying.play();
    stopOne.pause();
    stopTwo.pause();
    stopThree.pause();
  }

  function playForest() {
    if (forest.paused) {
      changeSound(forest, rain, shop, fire);
      buttonSoundRain.classList.remove("active");
      buttonSoundShop.classList.remove("active");
      buttonSoundFire.classList.remove("active");
    } else {
      forest.pause();
      buttonSoundNature.classList.remove("active");
    }
  }

  function playRain() {
    if (rain.paused) {
      changeSound(rain, forest, shop, fire);
      buttonSoundNature.classList.remove("active");
      buttonSoundFire.classList.remove("active");
      buttonSoundShop.classList.remove("active");
    } else {
      rain.pause();
      buttonSoundRain.classList.remove("active");
    }
  }

  function playShop() {
    if (shop.paused) {
      changeSound(shop, forest, rain, fire);
      buttonSoundNature.classList.remove("active");
      buttonSoundFire.classList.remove("active");
      buttonSoundRain.classList.remove("active");
    } else {
      shop.pause();
      buttonSoundShop.classList.remove("active");
    }
  }

  function playFire() {
    if (fire.paused) {
      changeSound(fire, forest, rain, shop);
      buttonSoundRain.classList.remove("active");
      buttonSoundShop.classList.remove("active");
      buttonSoundNature.classList.remove("active");
    } else {
      fire.pause();
      buttonSoundFire.classList.remove("active");
    }
  }

  return {
    pressButton,
    timeEnd,
    playForest,
    playRain,
    playShop,
    playFire,
  };
}
