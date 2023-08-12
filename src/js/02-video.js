import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
const time = localStorage.getItem('videoplayer-current-time');
console.log(time);
iframePlayer.setCurrentTime(time);
iframePlayer.on('timeupdate', throttle(onPlay, 1000));
