window.onload = function() {
  let video =document.querySelector('#video');
  video.addEventListener('click', playStop);

  let playButtons = document.querySelectorAll('.play');
  for (let i = 0; i < playButtons.length; i++){
      playButtons[i].addEventListener('click', playStop);
  };

  let soundButton = document.querySelector('.video__volume-icon');
  soundButton.addEventListener('click', soundOff);

  let durationControl = document.querySelector('#duration-time');
  durationControl.addEventListener('mousedown', stopInterval);
  durationControl.addEventListener('click', setVideoDuration)

  durationControl.min = 0;
  durationControl.value = 0;  

  
  let soundControl = document.querySelector('#volume-level');
  soundControl.addEventListener('mouseup', changeSoundVolume); 

  soundControl.min = 0;
  soundControl.max = 10;

  let videoPlayButton = document.querySelector('.video__play');
  let toolbarPlayButton = document.querySelector('.video__toolbar-play');

  video.addEventListener('ended', function(){
      videoPlayButton.classList.toggle('video__play--active');
      toolbarPlayButton.classList.toggle('video__toolbar-play--active');
      video.currentTime = 0;
  })

  let intervalId;
  function playStop() {
      videoPlayButton.classList.toggle('video__play--active');
      toolbarPlayButton.classList.toggle('video__toolbar-play--active');

      durationControl.max = video.duration;

      if(video.paused){
          video.play();
          intervalId = setInterval(updateDuration,1000/66)
          
      } else {
          video.pause();
          clearInterval(intervalId);
      };
  };

  function stopInterval(){
      video.pause();
      clearInterval(intervalId);
  };

  function setVideoDuration(){
      if (video.paused){
          video.play();
      } else {
          video.pause();  
      }
      video.currentTime = durationControl.value;
      intervalId = setInterval(updateDuration,1000/66);
  };

  function updateDuration(){    
      durationControl.value = video.currentTime;
  };

  function soundOff(){   

      if (video.volume === 0){
          video.volume = soundLevel;
          soundControl.value = soundLevel*10;
      }else{
          soundLevel = video.volume;
          video.volume = 0;
          soundControl.value = 0;
      }    
  };
  function changeSoundVolume(){
      video.volume = soundControl.value/10; 
  };
};