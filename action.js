/*
TODO:
1) Finish tutorial
2) Customization options
    - Theme color
    - background (given list and upload)
    - video upload
*/

const player = document.querySelector('div#player');
const video = player.querySelector('video')


// ----------- Helper Functions -----------------
function toggle_play() {
    video[ video.paused? 'play' : 'pause' ]()
}

// ------------ User Controls ---------------
video.addEventListener('click', toggle_play);
window.addEventListener("keypress", function (e) {
    if (e.defaultPrevented) { return; /* Do nothing if the event was already processed */ }
    if( e.key === " ") { toggle_play() }
})



// ------------ Customization options -------------