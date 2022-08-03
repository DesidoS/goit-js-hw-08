import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(videoplayerCurrentTime)

    player.on('timeupdate', throttle(onPlay, 1000));
    
    function onPlay(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
};