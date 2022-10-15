// !Selectors

const playBtn = document.querySelector("#playBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const musicContainer = document.querySelector(".music-container");
const music = document.querySelector("#music");
const img = document.querySelector("#image");
const title = document.querySelector("#title");
const songs = [
    "2_5436328909014570995",
    "Akon Belly dance",
    "Balenciaga   HFEDOT 63690",
    "Geeflow-Hasbi-Rabbi-Musab 38790",
    "Soul, Руслан Добрый-Добрый я"
  ];
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

let songIndex = 1;

// ! PlayMusics

function loadSongs(song) {
  music.src = `./Music/${song}.mp3`;
  title.innerHTML = song;
  changeImage();
}

changeImage = () => {
  if (songIndex === 0) {
    image.src = "./Img/photo_2022-01-31_17-46-24.jpg";
  } else if (songIndex === 1) {
    image.src = "./Img/Man.jpg";
  } else if (songIndex === 2) {
    image.src = "./Img/forever.jpg";
  } else if (songIndex === 3) {
    image.src = "./Img/wine & dine.jpg";
  } else {
    image.src = "./Img/with friend.jpg";
  }
};

loadSongs(songs[songIndex]);


function playMusic() {
  music.play();
  if (musicContainer.classList.contains("play")) {
    music.pause();
    musicContainer.classList.remove("play");
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
  } else {
    music.play();
    musicContainer.classList.add("play");
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  }
}
playBtn.addEventListener("click", playMusic);

// ! PrevMusics

function prevMusic() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
   
  }
   loadSongs(songs[songIndex]);

  music.play();
  musicContainer.classList.add("play");
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
}
prevBtn.addEventListener("click", prevMusic);

// ! nextMusic
function nextMusic() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
    
  }
  loadSongs(songs[songIndex]);
  
  music.play();
  musicContainer.classList.add("play");
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
}

nextBtn.addEventListener("click", nextMusic);

// ! Progress

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  let progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;
  // changeMusic();
}
music.addEventListener("timeupdate",updateProgress);
progressContainer.addEventListener("click", setProgress);

// ! Setprogress

function setProgress(e) {
  let width = this.clientWidth;
  let clickX = e.offsetX;
  let duration = music.duration;
  music.currentTime = (clickX / width) * duration;
}