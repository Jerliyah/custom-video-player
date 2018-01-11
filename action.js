/*
TODO:
1) Finish tutorial
2) Customization options
    - Theme color
    - background (given list and upload)
    - video upload
*/

// ------------- DOM grab ---------------
const player = document.querySelector('div#player');
const video = player.querySelector('video');
const play_btn = player.querySelector('i#play');


// ----------- Helper Functions -----------------
function toggle_play() {
    video[ video.paused? 'play' : 'pause' ]();
    play_btn.innerText = video.paused? 'play_arrow' : 'pause'
}

// ------------ User Controls ---------------
    // Pause and Play
play_btn.addEventListener('click', toggle_play);
video.addEventListener('click', toggle_play);
window.addEventListener("keypress", function (e) {
    if (e.defaultPrevented) { return; /* Do nothing if the event was already processed */ } 
    if( e.key === " ") { toggle_play() }
})





// ------------ Customization options -------------