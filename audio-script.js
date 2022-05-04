//Bunch of Definitions for DOM selection
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

//List of songs, should better scan the songs folder for aviable ones, and then create such a list
const songs = ['أخبرني', 'يه جاه براى من تو اين حرم است', 'امشب در سر', 'عبق الأمل'];

//Keep track of the current song
let songIndex = 1;

loadSong(songs[songIndex]);

//Update song details
function loadSong(song){
    //We need to update the title, actual song, image
    title.innerText = song;
    audio.src = `music-albums/music-tracks/${song}.mp3`;
    cover.src = `music-albums/music-images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

function nextSong(){
    songIndex++;
    if (songIndex > 3) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
}

function prevSong(){
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(event_object){
    const {duration, currentTime} = event_object.srcElement
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(event_object){
    const width = this.clientWidth;
    const clickX = event_object.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

//Event Listeners
//Pause/Play Button Listener
playBtn.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})

//next/prev button listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//event listener for progress bar
audio.addEventListener('timeupdate', updateProgress);

//travers through audio track using the progress bar
progressContainer.addEventListener('click', setProgress);

//auto jump to next audio when the current finishes
audio.addEventListener('ended', nextSong);