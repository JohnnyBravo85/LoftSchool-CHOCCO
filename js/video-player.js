window.onload = function () {
  let video = document.querySelector('#video');

  video.addEventListener('click', playStop);

  let playButtons = document.querySelectorAll('.play');
  let playButtonsLength = playButtons.length;

  for(let i = 0; i < playButtonsLength; ++i) {
    playButtons[i].addEventListener('click', playStop);
  };

  let micOff = document.querySelector('.video__volume-icon');
  micOff.addEventListener('click', soundOff);

  let durationControl = document.querySelector('#duration-time');
  durationControl.addEventListener('mousedown', stopInterval);
  durationControl.addEventListener('click', setVideoDuration);

  durationControl.min = 0;
  durationControl.value = 0;

  let soundControl = document.querySelector('#volume-level');
  soundControl.addEventListener('mouseup', changeSoundVolume);

  //Значения громкости
  soundControl.mix = 0;
  soundControl.max = 10;

  //Присваивание ползунку максимального значения
  soundControl.value = soundControl.max;

  let videoPlayButton = document.querySelector('.video__play');
  let toolbarPlayButton = document.querySelector('.video__toolbar-play');

  video.addEventListener('ended', function () {
    videoPlayButton.classList.toggle('video__play--active');
    toolbarPlayButton.classList.toggle('video__toolbar-play--active');
    video.currentTime = 0;
  });

  let intervalId;
  function playStop() {

    videoPlayButton.classList.toggle('video__play--active');
    toolbarPlayButton.classList.toggle('video__toolbar-play--active');

    //Присваиваем максимальное значение input type='range' равное продолжительности видео
    durationControl.max = video.duration;

    //Проверить стоить ли видео на паузе, если да начнем воспроизведение и наоборот
    
    if(video.paused) {

      video.play();
      intervalId = setInterval(updateDuration, 1000 / 66);

    } else {

      video.pause();
      clearInterval(intervalId);
    };
  };

  function stopInterval() {
    video.pause();
    clearInterval(intervalId);
  };

    //Реализует возможность перемотки видео

  function setVideoDuration() {
    if (video.pause()) {
      video.play();
    } else {
      video.pause();
    }

    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration, 1000/66);
  };

  //Функция обновления позиции ползунка
  function updateDuration() {
    durationControl.value = video.currentTime;
  };

  function soundOff() {
      //Проверка уровня громкости, если есть то off, если нет то on и запоминает текущию позицию в soundLevel

    if(video.volume === 0) {
      video.volume = soundLevel;
      soundControl.value = soundLevel * 10;
    } else {
        //Если нет громкости возвращаем прежний уровень громкости
      soundLevel = video.volume;
      video.volume = 0;
      soundControl.value = 0;
    }
  };

    //Делим на 10 для более точной регулировки звука
  function changeSoundVolume() {
    video.volume = soundControl.value / 10;
  };
};