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
const songs = ['أخبرني', 'يه جاه براى من تو اين حرم است', 'امشب در سر', 'عبق-الأمل'];

//Keep track of the current song
let songIndex = 2;

loadSong(songs[songIndex]);

//Update song details
function loadSong(song){
    //We need to update the title, actual song, image
    title.innerText = song;
    audio.src = `music-albums/music-tracks/${song}.mp3`;
    cover.src = `music-albums/music-images/${song}.jpg`;
}