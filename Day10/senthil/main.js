console.log("code is running");
/* const parent = document.getElementById("controls");
const pauseButton = document.getElementById("pause");

console.log(parent);
console.log(pauseButton);

parent.removeChild(pauseButton)

for(let buttonIndex=0;buttonIndex<100;buttonIndex++){
    const newButton = document.createElement("button")
    newButton.textContent = buttonIndex+1;
    parent.appendChild(newButton)
    //<button>1</button>
}
 */

const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");

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

const addPlayClickEvent = () => {
  playButton.addEventListener("click", setPlayMode);
  //playButton.addEventListener("click", storeInServer);
  //playButton.onclick = setPlayMode;
  //playButton.onclick = storeInServer
  //<button onclick="setPlayMode()">Play</button>
};

const removePlayClickEvent = () => {
  //playButton.onclick = null;
  playButton.removeEventListener("click", setPlayMode);
};

const addPauseClickEvent = () => {
  pauseButton.addEventListener("click", setPauseMode);
};
const removePauseClickEvent = () => {
  pauseButton.removeEventListener("click", setPauseMode);
};

const initialize = () => {
  //I want to hide pause Button
  hidePauseButton();
  addPlayClickEvent();
  addPauseClickEvent();
};

const dispose = () => {
  removePlayClickEvent();
  removePauseClickEvent();
};

initialize();
