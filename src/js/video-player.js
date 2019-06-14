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

    function startStopVideo(e) {
      e.stopPropagation();
      if (video.paused) {
        video.play();
        videoPlayBigButton.classList.add('video__play--active');
        videoToolbarPlayButton.classList.add('video__toolbar-play--active');
        videoToolbarPauseButton.classList.add('video__toolbar-pause--active');
      } else {
        video.pause();
        videoPlayBigButton.classList.remove('video__play--active');
        videoToolbarPlayButton.classList.remove('video__toolbar-play--active');
        videoToolbarPauseButton.classList.remove('video__toolbar-pause--active');
      }
    }

    videoPlayer.addEventListener('click', startStopVideo);

    for (let i = 0; i < playLength; ++i) {
      play[i].addEventListener('click', startStopVideo);
    }

    durationTime.value = 0;
    let videoDurationMin = 0;
    let videoDurationMax = video.duration;
    durationTime.setAttribute('min', videoDurationMin);
    durationTime.setAttribute('max', videoDurationMax);

    let timeRequestInterval = 10;
    setInterval(function() {
      let currentTime =  video.currentTime;
      durationTime.value = currentTime;
    }, timeRequestInterval);

    durationTime.addEventListener('input', function(e) {
      video.pause();
      video.currentTime = durationTime.value;
    });

    durationTime.addEventListener('change', function(e) {
      video.currentTime = durationTime.value;
      video.play();
    });

    let volumeLevelMin = 0;
    let volumeLevelMax = 10;

    volumeLevel.setAttribute('min', volumeLevelMin);
    volumeLevel.setAttribute('max', volumeLevelMax);
    video.volume = 5/10;

    volumeLevel.addEventListener('input', function(e) {
      video.volume = volumeLevel.value / 10;
    });

    videoVolume.addEventListener('click', function(e) {
      video.muted = true;
      videoVolume.classList.add('video__volume--active');
      videoVolumeMuted.classList.add('video__volume-muted--active');
    });
    
    videoVolumeMuted.addEventListener('click', function(e) {
      video.muted = false;
      videoVolume.classList.remove('video__volume--active');
      videoVolumeMuted.classList.remove('video__volume-muted--active');
    });
  
    video.addEventListener('timeupdate', function(e) {
      console.log(video.currentTime);
      let time = video.currentTime;
      // let minutes = Math.round(time) / 60;
      // let seconds = 
      timer.innerHTML = time;

    }, false);

  }
})()