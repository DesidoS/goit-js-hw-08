import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const LOCAL_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const vimeoPlayerCurrentTime = localStorage.getItem(LOCAL_KEY)

player.setCurrentTime(vimeoPlayerCurrentTime)

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
    
function onPlay(e) {
    localStorage.setItem(LOCAL_KEY, e.seconds);
};