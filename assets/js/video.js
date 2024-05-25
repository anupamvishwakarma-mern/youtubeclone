const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const muteUnmuteBtn = document.getElementById('muteUnmute');
const fullscreenBtn = document.getElementById('fullscreen');
const title = document.querySelector('.video-info h1');
const like = document.querySelector('.title p .like')
const views = document.querySelector('.title p .views')
const description = document.querySelector('.description')

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

muteUnmuteBtn.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    muteUnmuteBtn.textContent = 'Mute';
  } else {
    video.muted = true;
    muteUnmuteBtn.textContent = 'Unmute';
  }
});

fullscreenBtn.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});


window.onload = function () {
  const link = JSON.parse(window.localStorage.getItem('link'))
  console.log(link)
  title.textContent = link.title
  views.textContent = link.views
  like.textContent = link.views
  description.textContent = link.description
  while (video.firstChild) {
    video.removeChild(video.firstChild);
  }
  const source = document.createElement('source');
  source.src = link.videoUrl;
  source.type = 'video/mp4';

  video.appendChild(source);

  video.load();
  video.play();

  if (video.paused) {
    playPauseBtn.textContent = 'Pause';
  } else {
    playPauseBtn.textContent = 'Play';
  }

  if (video.muted) {
    muteUnmuteBtn.textContent = 'Mute';
  } else {
    muteUnmuteBtn.textContent = 'Unmute';
  }
}