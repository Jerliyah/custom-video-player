/*
TODO:
Customization options
    - Theme color
    - background (given list and upload)
    - video upload
*/


// ------------- DOM Stuff ---------------
// Player and controls
const player = document.querySelector('#player');
const video = player.querySelector('video');
const video_controls = player.querySelector('#video-controls');
const progress_bar  =  player.querySelector('div#progress-bar');

// Play
const play_btn = player.querySelector('i#play');

// Skips
const skip_icons = Array.from( [...player.querySelectorAll('i[data-skip]')] )
skip_icons.forEach( (skip_icon) => {
    let wrapper = document.createElement('div');
    wrapper.classList.add('skip-wrapper');

    video_controls.replaceChild(wrapper, skip_icon);

    wrapper.appendChild(skip_icon);
    wrapper.insertAdjacentHTML('beforeend', `<span> ${skip_icon.dataset.skip} sec </span>`)
})
const skips = player.querySelectorAll('div.skip-wrapper')

// Speed
const speed_ctn = player.querySelector('ul#speed-ctn');
var speeds = [0.5, 1, 1.5, 1.75, 2]
speeds.forEach( (speed) => {
    speed_ctn.insertAdjacentHTML('beforeend', `<li data-speed="${speed}">${speed}x</li>`)
})
const speed_options = Array.from( [...speed_ctn.querySelectorAll('li')] );

// Fullscreen
fullscreen_btn = player.querySelector('i#fullscreen');



// ----------- Helper Functions -----------------
function toggle_play() {
    video[ video.paused? 'play' : 'pause' ]();
    play_btn.innerText = video.paused? 'play_arrow' : 'pause'
}

function skip() {
    let data = this.querySelector('i').dataset;
    let time_change = data.direction === 'forward'?  data.skip : "-" + data.skip;
    video.currentTime += parseInt(time_change);
}

function change_video_speed() {
    let speed = this.dataset.speed;
    console.log(speed);
    video.playbackRate = speed;
}

function handle_progress() {
    let progress = (video.currentTime / video.duration) * 100;
    progress_bar.style.width = progress + "%";
}

function change_progress(e) {
    console.log(mousedown)
    let changed_progress = (e.offsetX / progress_bar.offsetWidth) * video.currentTime;
    video.currentTime = changed_progress
}



function toggle_fullscreen() {
        let vc = video.controls

        // Currently fullscreen
        if( document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ) {
                video.controls = true
            }
        else {
            // Request based on browser
            if (video.requestFullscreen) { video.requestFullscreen(); }
            else if (video.mozRequestFullScreen) { video.mozRequestFullScreen(); }
            else if (video.webkitRequestFullscreen) { video.webkitRequestFullscreen(); }

            video.controls = false;
        }

        

    
}


// ------------ User Controls ---------------
let mousedown = false;
var fullscreenElement = 
    document.fullscreenElement || document.mozFullScreenElement || 
    document.webkitFullscreenElement || document.msFullscreenElement;
window.addEventListener('mousedown', () => mousedown = true);
window.addEventListener('mouseup', () => mousedown = false);

    // Progress
video.addEventListener('timeupdate', handle_progress);
progress_bar.parentElement.addEventListener('mousemove', (e) => mousedown && change_progress(e))
progress_bar.parentElement.addEventListener('click', change_progress);

    // Pause and Play
play_btn.addEventListener('click', toggle_play);
video.addEventListener('click', toggle_play);
window.addEventListener("keypress", function (e) {
    if (e.defaultPrevented) { return; /* Do nothing if the event was already processed */ } 
    if( e.key === " ") { toggle_play() }
})

    // Skipping
skips.forEach( (skip_btn) => { skip_btn.addEventListener('click', skip) })

    // Speed Change
speed_ctn.addEventListener('click', function() { this.classList.toggle('showing-options') })
speed_options.forEach( (speed_option) => speed_option.addEventListener('click', change_video_speed) )

    // Fullscreen
fullscreen_btn.addEventListener('click', toggle_fullscreen);
window.addEventListener('resize', toggle_fullscreen)









// ------------ Customization options -------------