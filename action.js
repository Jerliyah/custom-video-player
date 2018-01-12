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
const player = document.querySelector('div#player');
const video = player.querySelector('video');
const video_controls = player.querySelector('div#video-controls');

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
const speed_options = speeds_ctn.querySelector('li');


// ----------- Helper Functions -----------------
function toggle_play() {
    video[ video.paused? 'play' : 'pause' ]();
    play_btn.innerText = video.paused? 'play_arrow' : 'pause'
}

function skip() {
    let data = this.querySelector('i').dataset
    let time_change = data.direction === 'forward'?  data.skip : "-" + data.skip;
    console.log(video.currentTime)
    video.currentTime += parseInt(time_change)
    console.log(video.currentTime)
}

function change_video_speed() {
    let speed = this.dataset.speed;
    
}


// ------------ User Controls ---------------
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






// ------------ Customization options -------------