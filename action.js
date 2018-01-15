/*
TODO:
1) Finish tutorial
2) Customization options
    - Theme color
    - background (given list and upload)
    - video upload
*/


// ------------- DOM Stuff ---------------
// Player and controls
const player = document.querySelector('#player');
const video = player.querySelector('video');
const video_controls = player.querySelector('#video-controls');
const progress_bar = player.querySelector('div#progress-bar');

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
var speeds = [0.5, 1, 1.5, 2]
speeds.forEach( (speed) => {
    speed_ctn.insertAdjacentHTML('beforeend', `<li data-speed="${speed}">${speed}x</li>`)
})
const speed_options = speed_ctn.querySelector('li');



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
}

function handle_progress() {
    let progress = (video.currentTime / video.duration) * 100;
    progress_bar.style.width = progress + "%";
}



// ------------ User Controls ---------------
    // See Progess
video.addEventListener('timeupdate', handle_progress);

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
speed_options.addEventListener('click', change_video_speed)

progress_bar.addEventListener('mouseover', handle_progress)








// ------------ Customization options -------------