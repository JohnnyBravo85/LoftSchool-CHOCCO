;
(function () {
  window.onload = function () {

    const play = document.querySelectorAll('.play'),
      playLength = play.length,
      videoPlayer = document.querySelector('.video__player'),
      video = document.querySelector('#video'),
      videoPlayBigButton = document.querySelector('.video__play'),
      videoToolbarPlayButton = document.querySelector('.video__toolbar-play'),
      videoToolbarPauseButton = document.querySelector('.video__toolbar-pause'),
      durationTime = document.querySelector('#duration-time'),
      volumeLevel = document.querySelector('#volume-level'),
      videoVolume = document.querySelector('.video__volume'),
      videoVolumeMuted = document.querySelector('.video__volume-muted'),
      timer = document.querySelector('#timer');

    //id функций setInterval и setTimeout необходимо определять или в глобально оласти видимости или на 1ин уровень выше, чем срабатывает clearInterval или clearTimeout
    let timeRequestInterval,
        timeRequest;
    
    //Управление конопками play
    function startStopVideo(e) {
      e.stopPropagation();
      if (video.paused) {
        timeRequest = setInterval(function () {
          timeRequestInterval = 10;
          let currentTime = video.currentTime;
          durationTime.value = currentTime;
        }, timeRequestInterval);
        video.play();
        videoPlayBigButton.classList.add('video__play--active');
        videoToolbarPlayButton.classList.add('video__toolbar-play--active');
        videoToolbarPauseButton.classList.add('video__toolbar-pause--active');
      } else {
        video.pause();
        videoPlayBigButton.classList.remove('video__play--active');
        videoToolbarPlayButton.classList.remove('video__toolbar-play--active');
        videoToolbarPauseButton.classList.remove('video__toolbar-pause--active');
        setTimeout(function () {
          clearInterval(timeRequest);
        });
      }
    }

    //Событие на окне плеера
    videoPlayer.addEventListener('click', startStopVideo);

    for (let i = 0; i < playLength; ++i) {
      play[i].addEventListener('click', startStopVideo);
    }

    //Добавление значений ползунку времени видео
    durationTime.value = 0;
    let videoDurationMin = 0;
    let videoDurationMax = video.duration;
    durationTime.setAttribute('min', videoDurationMin);
    durationTime.setAttribute('max', videoDurationMax);

    //Событие изменение времени видео по ползунку
    durationTime.addEventListener('input', function (e) {
      video.pause();
      video.currentTime = durationTime.value;
    });

    durationTime.addEventListener('change', function (e) {
      video.currentTime = durationTime.value;
      video.play();
    });

    //Установка значений громкости
    let volumeLevelMin = 0;
    let volumeLevelMax = 10;

    volumeLevel.setAttribute('min', volumeLevelMin);
    volumeLevel.setAttribute('max', volumeLevelMax);
    video.volume = 5 / 10;

    //Настройка ползунка громкости
    volumeLevel.addEventListener('input', function (e) {
      video.volume = volumeLevel.value / 10;
    });

    //Настройка иконки Muted
    videoVolume.addEventListener('click', function (e) {
      video.muted = true;
      videoVolume.classList.add('video__volume--active');
      videoVolumeMuted.classList.add('video__volume-muted--active');
    });

    videoVolumeMuted.addEventListener('click', function (e) {
      video.muted = false;
      videoVolume.classList.remove('video__volume--active');
      videoVolumeMuted.classList.remove('video__volume-muted--active');
    });

    //Настройка таймера отсчета времени видео
    video.addEventListener('timeupdate', function (e) {
      const minutes = Math.floor(video.currentTime / 60);
      const seconds = Math.round(video.currentTime - minutes * 60);
      timer.innerHTML = `${minutes}:${seconds}`;
    });

    video.addEventListener('ended', function(e) {
      video.currentTime = 0;
      videoPlayBigButton.classList.remove('video__play--active');
      videoToolbarPlayButton.classList.remove('video__toolbar-play--active');
      videoToolbarPauseButton.classList.remove('video__toolbar-pause--active');
      // this.src = video.src;
    });
  }
})()