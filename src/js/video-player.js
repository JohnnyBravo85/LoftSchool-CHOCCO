;
(function () {
  window.onload = function () {

    const play = document.querySelectorAll('.play'),
      playLength = play.length,
      videoPlayer = document.querySelector('.video__player')
    video = document.querySelector('#video'),
      videoPlayBigButton = document.querySelector('.video__play'),
      videoToolbarPlayButton = document.querySelector('.video__toolbar-play'),
      videoToolbarPauseButton = document.querySelector('.video__toolbar-pause');

    videoPlayer.addEventListener('click', function(e) {
      if(video.paused) {
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
    })

    for (let i = 0; i < playLength; ++i) {
      play[i].addEventListener('click', function (e) {
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
      });
    }

  





  }
})()