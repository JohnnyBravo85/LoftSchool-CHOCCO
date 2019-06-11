;(function () {
  window.onload = function () {
    let video = document.querySelector('#video');
    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll('.play');

    //Навесили оброботчик событий на плей кнопки
    for (let i = 0; i < playButtons.length; i++) {
      playButtons[i].addEventListener('click', playStop);
    };

    let soundButton = document.querySelector('.video__volume-icon');

    //Навесили выключение звука на иконку
    soundButton.addEventListener('click', soundOff);

    //Навесили события на ползунок времени
    let durationControl = document.querySelector('#duration-time');
    durationControl.addEventListener('mousedown', stopInterval);
    durationControl.addEventListener('click', setVideoDuration)

    //Присволили min значение ползунку
    durationControl.min = 0;
    durationControl.value = 0;

    let soundControl = document.querySelector('#volume-level');
    soundControl.addEventListener('mouseup', changeSoundVolume);

    //Значения громкости
    soundControl.min = 0;
    soundControl.max = 10;

    let videoPlayButton = document.querySelector('.video__play');
    let toolbarPlayButton = document.querySelector('.video__toolbar-play');

    //Функция событий после окончания видео
    video.addEventListener('ended', function () {
      videoPlayButton.classList.toggle('video__play--active');
      toolbarPlayButton.classList.toggle('video__toolbar-play--active');
      video.currentTime = 0;
    })

    //Функция синхронизации ползунка и времени видео
    let intervalId;

    function playStop() {
      videoPlayButton.classList.toggle('video__play--active');
      toolbarPlayButton.classList.toggle('video__toolbar-play--active');

      durationControl.max = video.duration;

      if (video.paused) {
        video.play();
        intervalId = setInterval(updateDuration, 1000 / 66)

      } else {
        video.pause();
        clearInterval(intervalId);
      };
    };

    //Функция очистки интервала
    function stopInterval() {
      video.pause();
      clearInterval(intervalId);
    };

    //Функция управления видео во время пауз
    function setVideoDuration() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      video.currentTime = durationControl.value;
      intervalId = setInterval(updateDuration, 1000 / 66);
    };

    //Функция обновления интервала
    function updateDuration() {
      durationControl.value = video.currentTime;
    };

    //Регултровка громкости
    function soundOff() {

      if (video.volume === 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
      } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
      }
    };

    //Выставление громкости
    function changeSoundVolume() {
      video.volume = soundControl.value / 10;
    };
  };
})()