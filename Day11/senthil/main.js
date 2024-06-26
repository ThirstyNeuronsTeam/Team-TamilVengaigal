const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const audioDevice = document.getElementById("audioDevice");
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const songName = document.getElementById("songName");

const songs = ["music/hey.mp3", "music/summer.mp3", "music/ukulele.mp3"];
const lastIndex = songs.length - 1;
let currentSongIndex = 0;

const hidePauseButton = () => {
  pauseButton.style.display = "none";
};
const showPauseButton = () => {
  pauseButton.style.display = "inline-block";
};
const hidePlayButton = () => {
  playButton.style.display = "none";
  //<button style="display:none;>Play</button>
};
const showPlayButton = () => {
  playButton.style.display = "inline-block";
};

const setPlayMode = () => {
  hidePlayButton();
  showPauseButton();
};
const setPauseMode = () => {
  hidePauseButton();
  showPlayButton();
};

const pauseSong = () => {
  audioDevice.pause();
};

const playSong = () => {
  //play the song
  audioDevice.src = songs[currentSongIndex];
  songName.textContent = songs[currentSongIndex];
  audioDevice.play();
};

const addClickEventToPlayButton = () => {
  playButton.addEventListener("click", setPlayMode);
  playButton.addEventListener("click", playSong);
  //playButton.addEventListener("click", storeInServer);
  //playButton.onclick = setPlayMode;
  //playButton.onclick = storeInServer
  //<button onclick="setPlayMode()">Play</button>
};

const removeClickEventFromPlayButton = () => {
  //playButton.onclick = null;
  playButton.removeEventListener("click", setPlayMode);
};

const addClickEventToPauseButton = () => {
  pauseButton.addEventListener("click", setPauseMode);
  pauseButton.addEventListener("click", pauseSong);
};
const removeClickEventFromPauseButton = () => {
  pauseButton.removeEventListener("click", setPauseMode);
};

const goToPrevSong = () => {
  currentSongIndex = currentSongIndex - 1;
  //currenSongIndex negative pochunaa , last song poganum
  if (currentSongIndex < 0) {
    currentSongIndex = lastIndex;
  }
  playSong();
};
const goToNextSong = () => {
  currentSongIndex = currentSongIndex + 1;
  //If we are last song , goto first song
  if (currentSongIndex === lastIndex) {
    currentSongIndex = 0;
  }

  playSong();
};

const addClickEventToPrevButton = () => {
  prevButton.addEventListener("click", goToPrevSong);
};
const addClickEventToNextButton = () => {
  nextButton.addEventListener("click", goToNextSong);
};

const dispose = () => {
  removeClickEventFromPlayButton();
  removeClickEventFromPauseButton();
};

const initializeMusicPlayer = () => {
  //I want to hide pause Button
  setPauseMode();
  addClickEventToPlayButton();
  addClickEventToPauseButton();
  addClickEventToPrevButton();
  addClickEventToNextButton();
};

initializeMusicPlayer();

//click event - two buttons
//two functions
