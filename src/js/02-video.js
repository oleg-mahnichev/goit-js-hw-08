import Player from '@vimeo/player';
console.log(Player);
import throttle from 'lodash.throttle';
console.log(throttle);

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

window.addEventListener('load', handlerLoad)
function handlerLoad() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
};
